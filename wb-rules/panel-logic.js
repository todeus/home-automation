 

defineRule("cron_clock", {
  whenChanged: ["wb-map3e_34/Total AP energy"],
  then: function () {
    var d = new Date();
    dev["panel-logic/H"] = d.getHours();
    dev["panel-logic/M"] = d.getMinutes();
    dev["panel-logic/S"] = d.getSeconds();
    dev["panel-logic/Day"] = d.getDate();
    dev["panel-logic/Month"] = d.getMonth()+1;
    dev["panel-logic/Year"] = d.getFullYear();
  }
});

defineVirtualDevice('panel-logic', {
    title: 'SVG-панель' ,
    cells: {
      GoOut: {
        title: "Все ушли",
	    type: "switch",
	    value: false,
        order: 1
	    },
      OffAll: {
        title: "Выключить всё",
	    type: "pushbutton",
	    value: false,
        order: 2
	    },
      TempUp: {
        title: "Прибавить температуру",
	    type: "pushbutton",
        order: 3
	    },
      TempDown: {
        title: "Убавить температуру",
	    type: "pushbutton",
        order: 4
	    },
      H: {
        type: "value",
        value: 0,
        order: 5
        },
      M: {
        type: "value",
        value: 0,
        order: 6
      },
      S: {
        type: "value",
        value: 0,
        order: 6
      },
      Day: {
        type: "value",
        value: 0,
        order: 7
      },
      Month: {
        type: "value",
        value: 0,
        order: 8
      },
      Year: {
        type: "value",
        value: 0,
        order: 9
      },
      CooperTempUp: {
        title: "CooperUp",
	    type: "pushbutton",
        order: 10
	    },
      CooperTempDown: {
        title: "CooperDown",
	    type: "pushbutton",
        order: 11
	    },
    }
})

// Кнопка «Все ушли»
defineRule({  
  whenChanged: ["panel-logic/GoOut"],
  then: function (newValue, devName, cellName) {
    if (newValue){
      turnAllOff(); // вызов функции «Выключить всё»
      dev["panel-logic/SettingTemp"]= 22; // устанавливаем температуру
    }
  }
});

// Кнопка «Выключить всё»
defineRule({
  whenChanged: ["panel-logic/OffAll"],
  then: function (newValue, devName, cellName) {
    if (newValue){
      turnAllOff(); // вызов функции «Выключить всё»
    }
  }
});

// Функция «Выключить всё»
function turnAllOff() {
    // my-flat — это имя виртуального устройства эмулятора
    dev["my-flat/hall_light"] = false;
    dev["my-flat/kitchen_light"] = false;
    dev["my-flat/bathroom_light"] = false;
    dev["my-flat/breadroom_light"] = false;
    dev["my-flat/questroom_light"] = false;
}


var stepTemp = 1
// Кнопка «Прибавить температуру»
defineRule({
  whenChanged: ["panel-logic/TempUp"],
  then: function (newValue, devName, cellName) {
    // получаем текущее значение и прибавляем stepTemp
    dev["heat_floor/temperature"] = dev["heat_floor/temperature"] + stepTemp   
  }
});

// Кнопка «Убавить температуру»
defineRule({
  whenChanged: ["panel-logic/TempDown"],
  then: function (newValue, devName, cellName) {
    // получаем текущее значение и вычитаем stepTemp
    dev["heat_floor/temperature"] = dev["heat_floor/temperature"] - stepTemp
  }
});

// Кнопка «Прибавить температуру»
defineRule({
  whenChanged: ["panel-logic/CooperTempUp"],
  then: function (newValue, devName, cellName) {
    // получаем текущее значение и прибавляем stepTemp
    dev["wb-modbus-1-0/Air temp"] = dev["wb-modbus-1-0/Air temp"] + stepTemp   
  }
});

// Кнопка «Убавить температуру»
defineRule({
  whenChanged: ["panel-logic/CooperTempDown"],
  then: function (newValue, devName, cellName) {
    // получаем текущее значение и вычитаем stepTemp
    dev["wb-modbus-1-0/Air temp"] = dev["wb-modbus-1-0/Air temp"] - stepTemp
  }
});