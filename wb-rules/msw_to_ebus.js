
var thermal_curve7 = [];
var setpoint;
var delta;

defineVirtualDevice("heat_floor", {
  title: "Heat Floor",
  cells: {
    temperature: {
      type: "range",
      value: 25,
      max: 35,
      min: 16
    },
    k: {
      type: "range",
      value: 20,
      max: 100,
      min: 1
    }
  }
});

k = 0;
delta = 0;
setpoint = 0;

thermal_curve7[10] = 29;
thermal_curve7[8.5] = 30;
thermal_curve7[7] = 31;
thermal_curve7[5] = 32;
thermal_curve7[2.5] = 33;
thermal_curve7[1] = 34;
thermal_curve7[0] = 35;
thermal_curve7[-3] = 36;
thermal_curve7[-5] = 37;
thermal_curve7[-6.5] = 38;
thermal_curve7[-10.5] = 39;
thermal_curve7[-15] = 40;
thermal_curve7[-20] = 41;
thermal_curve7[-30] = 42;
thermal_curve7[-40] = 43;

function setTemperature(set, outside){
  if((outside > -40) && (outside < -30)) {
    setpoint = thermal_curve7[-40];
  } else if ((outside > -30) && (outside < -20)) {
    setpoint = thermal_curve7[-30];
  } else if ((outside > -20) && (outside < -10.5)) {
    setpoint = thermal_curve7[-20];
  } else if ((outside > -10.5) && (outside < -6.5)) {
    setpoint = thermal_curve7[-10.5];
  } else if ((outside > -6.5) && (outside < -5)) {
    setpoint = thermal_curve7[-6.5];
  } else if ((outside > -5) && (outside < -3)) {
    setpoint = thermal_curve7[-5];
  } else if ((outside > -3) && (outside < 0)) {
    setpoint = thermal_curve7[-3];
  } else if ((outside > 0) && (outside < 1)) {
    setpoint = thermal_curve7[0];
  } else if ((outside > 1) && (outside < 2.5)) {
    setpoint = thermal_curve7[1];
  } else if ((outside > 2.5) && (outside < 5)) {
    setpoint = thermal_curve7[2.5];
  } else if ((outside > 5) && (outside < 7)) {
    setpoint = thermal_curve7[5];
  } else if ((outside > 7) && (outside < 8.5)) {
    setpoint = thermal_curve7[7];
  } else if ((outside > 8.5) && (outside < 10)) {
    setpoint = thermal_curve7[8.5];
  } else if (outside > 10) {
    setpoint = thermal_curve7[10];
  }
  
  k = dev["heat_floor"]["k"]/10;
  delta = set - dev["wb-msw-v3_88"]["Temperature"];
  dev["wbe2-i-ebus_12"]["Heating Setpoint"] = setpoint + Math.round(delta*k);
}

defineRule({
  whenChanged: ["heat_floor/temperature"],
  then: function (newValue, devName, cellName) {
    setTemperature(newValue, dev["wb-w1/28-00000d6acdbe"]); 
  }
});

defineRule("set_temperature", {
    when: cron("00 * * * *"),
    then: function(newValue, devName, cellName) {
      setTemperature(dev["heat_floor"]["temperature"], dev["wb-w1/28-00000d6acdbe"]);
    }
});
