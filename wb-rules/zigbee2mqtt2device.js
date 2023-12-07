defineVirtualDevice("plug1", {
  title: "plug1",
  cells: {
    device_temperature: {
      type: "temperature",
      value: 0
    },
    energy: {
      type: "power_consumption",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    power: {
      type: "power",
      value: 0
    },
    state: {
      type: "text",
      value: "0"
    },
    set: {
      type: "switch",
      value: 0
    }
  }
});

defineVirtualDevice("plug2", {
  title: "plug2",
  cells: {
    device_temperature: {
      type: "temperature",
      value: 0
    },
    energy: {
      type: "power_consumption",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    power: {
      type: "power",
      value: 0
    },
    state: {
      type: "text",
      value: "0"
    },
    set: {
      type: "switch",
      value: 0
    }
  }
});

defineVirtualDevice("door_sensor", {
  title: "door_sensor",
  cells: {
    battery: {
      type: "value",
      units: "%",
      value: 0
    },
    voltage: {
      type: "voltage",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    contact: {
      type: "switch",
      value: 0,
      readonly: true
    }
  }
});

defineVirtualDevice("move_sensor", {
  title: "move_sensor",
  cells: {
    battery: {
      type: "value",
      units: "%",
      value: 0
    },
    voltage: {
      type: "voltage",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    occupancy: {
      type: "switch",
      value: 0,
      readonly: true
    }
  }
});

defineVirtualDevice("bath_sensor", {
  title: "bath_sensor",
  cells: {
    battery: {
      type: "value",
      units: "%",
      value: 0
    },
    voltage: {
      type: "voltage",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    temperature: {
      type: "temperature",
      value: 0
    },
    humidity: {
      type: "rel_humidity",
      value: 0
    },
    pressure: {
      type: "atmospheric_pressure",
      value: 0
    }
  }
});

defineVirtualDevice("Cube", {
  title: "Cube",
  cells: {
    battery: {
      type: "value",
      units: "%",
      value: 0
    },
    voltage: {
      type: "voltage",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    action: {
      type: "text",
      value: ""
    },
    side: {
      type: "value",
      value: 0
    },
    action_angle: {
      type: "value",
      value: 0
    },
    action_from_side: {
      type: "value",
      value: 0
    },
    action_side: {
      type: "value",
      value: 0
    },
    action_to_side: {
      type: "value",
      value: 0
    },
    current: {
      type: "value",
      value: 0
    },
    power: {
      type: "value",
      value: 0
    },
    device_temperature: {
      type: "temperature",
      value: 0
    }
  }
});

defineVirtualDevice("curtain", {
  title: "curtain",
  cells: {
    battery: {
      type: "value",
      units: "%",
      value: 0
    },
    voltage: {
      type: "voltage",
      value: 0
    },
    linkquality: {
      type: "value",
      units: "dB",
      value: 0
    },
    illuminance_lux: {
      type: "value",
      value: 0
    },
    motor_state: {
      type: "text",
      value: ""
    },
    position: {
      type: "value",
      value: 0
    },
    state: {
      type: "text",
      value: ""
    },
    device_temperature: {
      type: "temperature",
      value: 0
    }
  }
});

defineRule("plug1_set", {
  whenChanged: ["plug1/set"],
  then: function (newValue, devName, cellName) {
    if (newValue) {
      publish("zigbee2mqtt/plug1/set", "ON");
    } else {
      publish("zigbee2mqtt/plug1/set", "OFF");
    }
  }
});

defineRule("plug2_set", {
  whenChanged: ["plug2/set"],
  then: function (newValue, devName, cellName) {
    if (newValue) {
      publish("zigbee2mqtt/plug2/set", "ON");
    } else {
      publish("zigbee2mqtt/plug2/set", "OFF");
    }
  }
});


trackMqtt("zigbee2mqtt/plug1", function(message){
  message_json = JSON.parse(message.value);
  dev['plug1']['device_temperature'] = message_json['device_temperature'];
  dev['plug1']['energy'] = message_json['energy'];
  dev['plug1']['linkquality'] = message_json['linkquality'];
  dev['plug1']['power'] = message_json['power'];
  dev['plug1']['state'] = message_json['state'];
  dev['plug1']['set'] = message_json['state'];
});

trackMqtt("zigbee2mqtt/plug2", function(message){
  message_json = JSON.parse(message.value);
  dev['plug2']['device_temperature'] = message_json['device_temperature'];
  dev['plug2']['energy'] = message_json['energy'];
  dev['plug2']['linkquality'] = message_json['linkquality'];
  dev['plug2']['power'] = message_json['power'];
  dev['plug2']['state'] = message_json['state'];
  dev['plug2']['set'] = (message_json['state']=="ON") ? true : false;
});

trackMqtt("zigbee2mqtt/door_sensor", function(message){
  message_json = JSON.parse(message.value);
  dev['door_sensor']['battery'] = message_json['battery'];
  dev['door_sensor']['linkquality'] = message_json['linkquality'];
  dev['door_sensor']['voltage'] = message_json['voltage']/1000;
  dev['door_sensor']['contact'] = message_json['contact'];
});

trackMqtt("zigbee2mqtt/move_sensor", function(message){
  message_json = JSON.parse(message.value);
  dev['move_sensor']['battery'] = message_json['battery'];
  dev['move_sensor']['linkquality'] = message_json['linkquality'];
  dev['move_sensor']['voltage'] = message_json['voltage']/1000;
  dev['move_sensor']['occupancy'] = message_json['occupancy'];
});

trackMqtt("zigbee2mqtt/bath_sensor", function(message){
  message_json = JSON.parse(message.value);
  dev['bath_sensor']['battery'] = message_json['battery'];
  dev['bath_sensor']['linkquality'] = message_json['linkquality'];
  dev['bath_sensor']['voltage'] = message_json['voltage']/1000;
  dev['bath_sensor']['temperature'] = Math.round(message_json['temperature'] * 10) / 10;
  dev['bath_sensor']['humidity'] = Math.round(message_json['humidity'] * 10) / 10;
  dev['bath_sensor']['pressure'] = message_json['pressure'];
});

trackMqtt("zigbee2mqtt/Cube", function(message){
  message_json = JSON.parse(message.value);
  dev['Cube']['battery'] = message_json['battery'];
  dev['Cube']['linkquality'] = message_json['linkquality'];
  dev['Cube']['voltage'] = message_json['voltage']/1000;
//  dev['Cube']['action'] = message_json['action'];
  dev['Cube']['side'] = message_json['side'];
  dev['Cube']['action_angle'] = message_json['action_angle'];
//  dev['Cube']['action_from_side'] = message_json['action_from_side'];
//  dev['Cube']['action_side'] = message_json['action_side'];
//  dev['Cube']['action_to_side'] = message_json['action_to_side'];
//  dev['Cube']['current'] = message_json['current'];
//  dev['Cube']['power'] = message_json['power'];
  dev['Cube']['device_temperature'] = message_json['device_temperature'];
});

trackMqtt("zigbee2mqtt/curtain", function(message){
  message_json = JSON.parse(message.value);
  dev['curtain']['battery'] = message_json['battery'];
  dev['curtain']['linkquality'] = message_json['linkquality'];
  dev['curtain']['voltage'] = message_json['voltage']/1000;
  dev['curtain']['illuminance_lux'] = message_json['illuminance_lux'];
  dev['curtain']['motor_state'] = message_json['motor_state'];
  dev['curtain']['position'] = message_json['position'];
  dev['curtain']['state'] = message_json['state'];
  dev['curtain']['device_temperature'] = message_json['device_temperature'];
});


