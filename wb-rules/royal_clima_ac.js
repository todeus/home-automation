var ac_state = new PersistentStorage("ac_state", {global: true});


defineVirtualDevice("royal_clima", {
  title: "Royal Clima",
  cells: {
    temperature: {
      type: "range",
      value: 21,
      max: 26,
      min: 17,
      order: 1
    },
    mode: {
      type: "text",
      value: "off",
      order: 2
    },
    fan: {
      type: "text",
      value: "1",
      order: 3
    },
    swing: {
      type: "text",
      value: "1",
      order: 4
    },
    mode_off: {
      title: "Выключить",
	  type: "pushbutton",
      order: 5
	},
    mode_auto: {
      title: "Авто",
	  type: "pushbutton",
      order: 6
	},
    mode_heat: {
      title: "Нагрев",
	  type: "pushbutton",
      order: 7
	},
    mode_cool: {
      title: "Охлаждение",
	  type: "pushbutton",
      order: 8
	},
    mode_dry: {
      title: "Осушение",
	  type: "pushbutton",
      order: 9
	},
    speed_auto: {
      title: "Скорость авто",
	  type: "pushbutton",
      order: 10
	},
    speed_min: {
      title: "Скорость минимум",
	  type: "pushbutton",
      order: 11
	},
    speed_mid: {
      title: "Скорость средняя",
	  type: "pushbutton",
      order: 12
	},
    speed_max: {
      title: "Скорость максимум",
	  type: "pushbutton",
      order: 13
    },
    temp_up: {
      title: "Увеличить температуру",
	  type: "pushbutton",
      order: 14
	},
    temp_down: {
      title: "Уменьшить температуру",
	  type: "pushbutton",
      order: 15
	}
  }
});


function setAirConditioner(mode, temperature, fan, swing){
 
 ac_state['mode'] = mode;
 ac_state['temperature'] = temperature;
 ac_state['fan'] = fan;
 ac_state['swing'] = swing;
  
  
 if(mode == "off") {
   publish("/devices/wb-msw-v3_86/controls/Play from ROM1/on","1") // КОНДИЦИОНЕР ВЫКЛЮЧЕН
 
 
 } else if(mode == "dry"){
   publish("/devices/wb-msw-v3_86/controls/Play from ROM2/on","1") // Режим ОСУШЕНИЕ
 
 
 } else if(mode == "auto") {
   if(fan == 1) {
     dev['royal_clima']['fan'] = 1
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM3/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM4/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM5/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM6/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM7/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM8/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM9/on","1") // Режим АВТО, Скорость вентилятора АВТО, Температура 24
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 2) {
     dev['royal_clima']['fan'] = 2;
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM10/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM11/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM12/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM13/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM14/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM15/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM16/on","1") // Режим АВТО, Скорость вентилятора ПЕРВАЯ, Температура 24
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 3) {
     dev['royal_clima']['fan'] = 3
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM17/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM18/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM19/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM20/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM21/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM22/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM23/on","1") // Режим АВТО, Скорость вентилятора ВТОРАЯ, Температура 24
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 4) {
     dev['royal_clima']['fan'] = 4
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM24/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM25/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM26/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM27/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM28/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM29/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM30/on","1") // Режим АВТО, Скорость вентилятора ТРЕТЬЯ, Температура 24
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } 


 } else if(mode == "cool") {
   if(fan == 1) {
     dev['royal_clima']['fan'] = "1"
     if(temperature < 17) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 17) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM31/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 17
     } else if(temperature == 18){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM32/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM33/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM34/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM35/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM36/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM37/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора АВТО, Температура 23
     } else if(temperature == 24){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 2) {
     dev['royal_clima']['fan'] = "2"
     if(temperature < 17) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM38/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM39/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM40/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM41/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM42/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM43/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ПЕРВАЯ, Температура 23
     } else if(temperature == 24){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 3) {
     dev['royal_clima']['fan'] = "3"
     if(temperature < 17) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM44/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM45/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM46/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM47/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM48/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM49/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ВТОРАЯ, Температура 23
     } else if(temperature == 24){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 4) {
     dev['royal_clima']['fan'] = "4"
     if(temperature < 17) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM50/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 18
     } else if(temperature == 19){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM51/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 19
     } else if(temperature == 20){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM52/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM53/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM54/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM55/on","1") // Режим ОХЛАЖДЕНИЕ, Скорость вентилятора ТРЕТЬЯ, Температура 23
     } else if(temperature == 24){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("heat", temperature, fan, "1");
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } 
   

} else if(mode == "heat") {
   if(fan == 1) {
     dev['royal_clima']['fan'] = "1"
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("atuo", temperature, fan, "1");
     } else if(temperature == 19){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 20) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM56/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM57/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM58/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM59/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM60/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 24
     } else if(temperature == 25){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM61/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 25
     } else if(temperature == 26){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM62/on","1") // Режим ОБОРГЕВ, Скорость вентилятора АВТО, Температура 26
     } else if(temperature > 26){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 2) {
     dev['royal_clima']['fan'] = "2"
    if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("atuo", temperature, fan, "1");
     } else if(temperature == 19){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 20) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM63/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM64/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM65/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM66/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM67/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 24
     } else if(temperature == 25){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM68/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ПЕРВАЯ, Температура 25
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 3) {
     dev['royal_clima']['fan'] = "3"
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("atuo", temperature, fan, "1");
     } else if(temperature == 19){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 20) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM69/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM70/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM71/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM72/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM73/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 24
     } else if(temperature == 25){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM74/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ВТОРАЯ, Температура 25
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   } else if(fan == 4) {
     dev['royal_clima']['fan'] = "4"
     if(temperature < 18) {
       dev['royal_clima']['mode'] = "cool";
       dev['royal_clima']['temperature'] = 17;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("cool", 17, "1", "1");
     } else if(temperature == 18) {
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("atuo", temperature, fan, "1");
     } else if(temperature == 19){
       dev['royal_clima']['mode'] = "auto";
       dev['royal_clima']['temperature'] = temperature;
       dev['royal_clima']['fan'] = fan;
       setAirConditioner("auto", temperature, fan, "1");
     } else if(temperature == 20) {
       publish("/devices/wb-msw-v3_86/controls/Play from ROM75/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 20
     } else if(temperature == 21){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM76/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 21
     } else if(temperature == 22){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM77/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 22
     } else if(temperature == 23){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM78/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 23
     } else if(temperature == 24){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM79/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 24
     } else if(temperature == 25){
       publish("/devices/wb-msw-v3_86/controls/Play from ROM80/on","1") // Режим ОБОРГЕВ, Скорость вентилятора ТРЕТЬЯ, Температура 25
     } else if(temperature > 25){
       dev['royal_clima']['mode'] = "heat";
       dev['royal_clima']['temperature'] = 26;
       dev['royal_clima']['fan'] = "1";
       setAirConditioner("heat", 26, "1", "1");
     }
   }
 }
};


var stepTemp = 1

defineRule({
  whenChanged: ["royal_clima/mode_off"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['mode'] = "off"   
  }
});

defineRule({
  whenChanged: ["royal_clima/mode_auto"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['mode'] = "auto"   
  }
});

defineRule({
  whenChanged: ["royal_clima/mode_heat"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['mode'] = "heat"   
  }
});

defineRule({
  whenChanged: ["royal_clima/mode_cool"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['mode'] = "cool"   
  }
});

defineRule({
  whenChanged: ["royal_clima/mode_dry"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['mode'] = "dry"   
  }
});

defineRule({
  whenChanged: ["royal_clima/speed_auto"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['fan'] = "1"   
  }
});

defineRule({
  whenChanged: ["royal_clima/speed_min"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['fan'] = "2"   
  }
});

defineRule({
  whenChanged: ["royal_clima/speed_mid"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['fan'] = "3"   
  }
});

defineRule({
  whenChanged: ["royal_clima/speed_max"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['fan'] = "4"   
  }
});

defineRule({
  whenChanged: ["royal_clima/temp_up"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['temperature'] = dev['royal_clima']['temperature'] + 1;
  }
});

defineRule({
  whenChanged: ["royal_clima/temp_down"],
  then: function (newValue, devName, cellName) {
    dev['royal_clima']['temperature'] = dev['royal_clima']['temperature'] - 1;
  }
});

trackMqtt("/devices/royal_clima/controls/mode/on", function(message){
  dev['royal_clima']['mode'] = message.value;
  ac_state['mode'] = message.value;
  setAirConditioner(message.value, ac_state['temperature'], ac_state['fan'], ac_state['swing']);
});

trackMqtt("/devices/royal_clima/controls/fan/on", function(message){
  dev['royal_clima']['fan'] = message.value;
  ac_state['fan'] = message.value;
  setAirConditioner(ac_state['mode'], ac_state['temperature'], message.value, ac_state['swing']);
});

trackMqtt("/devices/royal_clima/controls/swing/on", function(message){
  ac_state['swing'] = dev['royal_clima']['swing'];
});

defineRule({
  whenChanged: "royal_clima/temperature",
  then: function(newValue, devName, cellName){
    setAirConditioner(ac_state['mode'], newValue, ac_state['fan'], ac_state['swing']);
  }
});

