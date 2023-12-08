var cooper_state = new PersistentStorage("cooper_state", {global: true});
var error_code = [];

error_code[0] = "OK"; // Ошибок нет
error_code[1] = "D08"; // Замкнут вход D8, принудительное отключение оборудования (перегрев нагревателя или другиепричины)
error_code[2] = "FTR"; // 100%–ное засорение воздушного фильтра
error_code[4] =	"D04"; // Угроза заморозки водяного нагревателя по цифровому датчику температуры D4
error_code[6] = "D3N"; // Обрыв связи контроллера и цифрового датчика температуры обратной воды
error_code[7] = "D4N"; // Обрыв связи контроллера и цифрового датчика температуры поверхности нагревателя
error_code[8] = "485"; // Обрыв связи между пультом управления и контроллером
error_code[9] = "D09"; // Замкнут выход D9, временная остановка оборудования «ПАУЗА»)
error_code[10] = "D1N"; // Обрыв связи контроллера и цифрового датчика уличной температуры
error_code[11] = "D2N"; // Обрыв связи контроллера и цифрового датчика канальной температуры воздуха
error_code[12] = "D1K"; // Короткое замыкание цифрового датчика уличной температуры
error_code[13] = "D2K"; //	Короткое замыкание цифрового датчика канальной температуры воздуха
error_code[14] = "D3K"; // Короткое замыкание цифрового датчика температуры обратной воды
error_code[15] = "D4K"; // Короткое замыкание цифрового датчика температуры поверхности нагревателя
error_code[16] = "D5N"; // Обрыв связи контроллера и цифрового датчика температуры вытяжного воздуха
error_code[17] = "D5K"; // Короткое замыкание цифрового датчика температуры вытяжного воздуха
error_code[18] = "D7N"; // Обрыв связи контроллера и датчика влажности
error_code[19] = "M1N"; // Заниженное значение тока приточного вентилятора M1
error_code[20] = "M2N"; // Заниженное значение тока вытяжного вентилятора M2
error_code[21] = "M1M"; // Завышенное значение тока приточного вентилятора M1
error_code[22] = "M2M"; // Завышенное значение тока вытяжного вентилятора M2
error_code[24] = "RTC"; // Ошибка в работа часов
error_code[25] = "M1A"; // Общая ошибка приточного вентилятора
error_code[26] = "M2A"; // Общая ошибка вытяжного вентилятора
error_code[27] = "M1Z"; // Обрыв связи контроллера и приточного вентилятора на шине RS-485
error_code[28] = "M2Z"; // Обрыв связи контроллера и вытяжного вентилятора на шине RS-485
error_code[29] = "M1L"; //	Блокировка вращения приточного вентилятора
error_code[30] = "M2L"; //	Блокировка вращения вытяжного вентилятора
error_code[31] = "M1D"; //	Ошибка внутренних датчиков приточного вентилятора
error_code[32] = "M2D"; //	Ошибка внутренних датчиков вытяжного вентилятора
error_code[33] = "M1H"; //	Перегрев управляющей электроники приточного вентилятора
error_code[34] = "M2H"; //	Перегрев управляющей электроники вытяжного вентилятора
error_code[35] = "M1P"; //	Перегрев обмотки приточного вентилятора
error_code[36] = "M2P"; //	Перегрев обмотки вытяжного вентилятора
error_code[37] = "M1F"; //	Напряжение питания приточного вентилятора не в рабочем диапазоне (заниженное для трехфазных моторов, перенапряжение для однофазных моторов)
error_code[38] = "M2F"; //	Напряжение питания вытяжного вентилятора не в рабочем диапазоне (заниженное для трехфазных моторов, перенапряжение для однофазных моторов)
error_code[39] = "D06"; //	Замкнут вход D6 (датчик пожарной сигнализации) 
error_code[41] = "D1M"; //	Перегрев цифрового датчика уличной температуры (+50)
error_code[42] = "D2M"; //	Перегрев цифрового датчика канальной температуры (+75)
error_code[43] = "RSG"; //	Обрыв связи с геотермальным контуром на шине RS485
error_code[44] = "D12N"; // Обрыв связи блока геоконтура и цифрового датчика температуры 
error_code[45] = "D12K"; //	Короткое замыкание цифрового датчика температуры блока геоконтура
error_code[46] = "D11N"; //	Обрыв связи блока геоконтура и цифрового датчика уличной температуры 
error_code[47] = "D11K"; //	Короткое замыкание цифрового датчика уличной температуры блока геоконтура
error_code[48] = "RSB"; //	Обрыв связи контроллера с блоком реле на шине RS-485
error_code[49] = "D12"; //	Общая ошибка по датчику температуры блока геоконтура
error_code[50] = "D13"; //	Общая ошибка по датчику температуры блока геоконтура
error_code[52] = "M1'A"; //	Общая ошибка 2-го приточного вентилятора
error_code[53] = "M2'A"; //	Общая ошибка 2-го вытяжного вентилятора
error_code[54] = "M1'Z"; //	Обрыв связи контроллера и 2-го приточного вентилятора на шине RS-485
error_code[55] = "M2'Z"; //	Обрыв связи контроллера и 2-го вытяжного вентилятора на шине RS-485
error_code[56] = "M1'L"; //	Блокировка вращения 2-го приточного вентилятора
error_code[57] = "M2'L"; //	Блокировка вращения 2-го вытяжного вентилятора
error_code[58] = "M1'D"; //	Ошибка внутренних датчиков 2-го приточного вентилятора
error_code[59] = "M2'D"; //	Ошибка внутренних датчиков 2-го вытяжного вентилятора
error_code[60] = "M1'H"; //	Перегрев управляющей электроники 2-го приточного вентилятора
error_code[61] = "M2'H"; //	Перегрев управляющей электроники 2-го вытяжного вентилятора
error_code[62] = "M1'P"; //	Перегрев обмотки 2-го приточного вентилятора
error_code[63] = "M2'P"; //	Перегрев обмотки 2-го вытяжного вентилятора
error_code[64] = "M1'F"; //	Напряжение питания 2-го приточного вентилятора не в рабочем диапазоне (заниженное для трехфазных моторов, перенапряжение для однофазных моторов)
error_code[65] = "M2'F"; //	Напряжение питания 2-го вытяжного вентилятора не в рабочем диапазоне (заниженное для трехфазных моторов, перенапряжение для однофазных моторов)
error_code[81] = "H485"; //	Обрыв связи контроллера с блоком Humihybrid
error_code[82] = "HD1N"; //	Обрыв связи блока реле адиабатического увлажнителя с цифровым датчиком температуры D1 
error_code[83] = "HD2N"; //	Обрыв связи блока реле адиабатического увлажнителя с цифровым датчиком температуры D2
error_code[84] = "HD3N"; //	Обрыв связи блока реле адиабатического увлажнителя с цифровым датчиком температуры D3
error_code[85] = "HD1K"; //	Короткое замыкание цифрового датчика температуры D1 блока реле адиабатического увлажнителя
error_code[86] = "HD2K"; //	Короткое замыкание цифрового датчика температуры D2 блока реле адиабатического увлажнителя
error_code[87] = "HD3K"; //	Короткое замыкание цифрового датчика температуры D3 блока реле адиабатического увлажнителя
error_code[88] = "HD2"; //	Угроза замерзания по датчику D2 блока реле адиабатического увлажнителя
error_code[89] = "HD6N"; //	Обрыв связи блока реле адиабатического увлажнителя с цифровым датчиком влажности D6 


defineVirtualDevice("cooper", {
  title: "cooper",
  cells: {
    mode: {
      type: "text",
      value: "off",
      order: 1
    },
    error: {
      type: "text",
      value: "OK",
      order: 2
    },
    heater: {
      type: "switch",
      value: true,
      order: 3
    },
    speed: {
      type: "text",
      value: "0",
      order: 4
    },
    temperature: {
      type: "value",
      value: 27,
      order: 5
    },
    mode_off: {
      title: "Выключить",
	  type: "pushbutton",
      order: 6
	},
    speed_1: {
      title: "Скорость 1",
	  type: "pushbutton",
      order: 7
	},
    speed_2: {
      title: "Скорость 2",
	  type: "pushbutton",
      order: 8
	},
    speed_3: {
      title: "Скорость 3",
	  type: "pushbutton",
      order: 9
	},
    TempUp: {
      title: "+1 градус",
	  type: "pushbutton",
      order: 10
	},
    TempDown: {
      title: "-1 градус",
	  type: "pushbutton",
      order: 11
	}
  }
});

defineRule({
  whenChanged: ["cooper/mode_off"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['mode'] = "off"
    dev['cooper']['speed'] = "0"
    dev["wb-modbus-1-0"]["Power"] = false
  }
});

defineRule({
  whenChanged: ["cooper/speed_1"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['speed'] = "1"
    dev["wb-modbus-1-0"]["Power"] = true
    dev["wb-modbus-1-0"]["Fan speed"] = 1
  }
});

defineRule({
  whenChanged: ["cooper/speed_2"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['speed'] = "2"
    dev["wb-modbus-1-0"]["Power"] = true
    dev["wb-modbus-1-0"]["Fan speed"] = 2
  }
});

defineRule({
  whenChanged: ["cooper/speed_3"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['speed'] = "3"
    dev["wb-modbus-1-0"]["Power"] = true
    dev["wb-modbus-1-0"]["Fan speed"] = 3
  }
});

defineRule({
  whenChanged: ["cooper/TempUp"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['temperature'] = dev['cooper']['temperature'] + 1
    dev["wb-modbus-1-0"]["Air temp"] = dev['cooper']['temperature']
  }
});

defineRule({
  whenChanged: ["cooper/TempDown"],
  then: function (newValue, devName, cellName) {
    dev['cooper']['temperature'] = dev['cooper']['temperature'] - 1
    dev["wb-modbus-1-0"]["Air temp"] = dev['cooper']['temperature']
  }
});

defineRule({
  whenChanged: ["cooper/heater"],
  then: function (newValue, devName, cellName) {
    if (newValue) {
      dev["wb-modbus-1-0"]["Power"] = true
      dev["wb-modbus-1-0"]["Working mode"] = 1
      dev["cooper"]["mode"] = "heat"
    } else {
      dev["wb-modbus-1-0"]["Power"] = true
      dev["wb-modbus-1-0"]["Working mode"] = 0
      dev["cooper"]["mode"] = "fan_only"
    }
  }
});

trackMqtt("/devices/cooper/controls/mode", function(message){
  if(message.value == "off") {
      dev["wb-modbus-1-0"]["Power"] = false
    } else if(message.value == "heat") {
      dev["wb-modbus-1-0"]["Power"] = true
      dev["wb-modbus-1-0"]["Working mode"] = 1   
    } else if(message.value == "fan_only") {
      dev["wb-modbus-1-0"]["Power"] = true
      dev["wb-modbus-1-0"]["Working mode"] = 0
    }
});
  
defineRule("change_cooper_mode_power", {
  whenChanged: "wb-modbus-1-0/Power",
  then: function(newValue, devName, cellName){
    dev["cooper"]["error"] = error_code[dev["wb-modbus-1-0/Error Code"]]
    if(newValue) {
      if(dev["wb-modbus-1-0"]["Working mode"] == 0){
      	dev["cooper"]["mode"] = "fan_only"
      } else {
        dev["cooper"]["mode"] = "heat"
      }
    } else {
      dev["cooper"]["mode"] = "off"
    }
  }
});

defineRule("change_cooper_speed", {
  whenChanged: "wb-modbus-1-0/Fan speed",
  then: function(newValue, devName, cellName){
    if(dev["wb-modbus-1-0"]["Power"]){
      dev["cooper"]["speed"] = newValue
    }
  }
});

defineRule("change_cooper_temp", {
  whenChanged: "wb-modbus-1-0/Air temp",
  then: function(newValue, devName, cellName){
      dev['cooper']['temperature'] = newValue
  }
});

defineRule("change_cooper_mode", {
  whenChanged: "wb-modbus-1-0/Working mode",
  then: function(newValue, devName, cellName){
    if(newValue == 1) {
      dev["cooper"]["mode"] = "heat"
    } else {
      dev["cooper"]["mode"] = "fan_only"
    }
  } 
});

defineRule("change_error", {
  whenChanged: "wb-modbus-1-0/Error Code",
  then: function(newValue, devName, cellName){
    dev["cooper"]["error"] = error_code[dev["wb-modbus-1-0/Error Code"]]
  }
});






