//Объявление глобального хранилища, для счётчиков
var counter_energy = new PersistentStorage("count er_energy", {global: true});
var meter // Временная переменная для хранения текущего значения счётчика

//counter_energy['daytime'] = true
//counter_energy['current'] = 0  // Обнуление текущего значения счётчика
//counter_energy['day'] = 0 // Обнуление дневного счетчика
//counter_energy['night'] = 0 // Обнуление ночного счетчика

//counter_energy['3daytime'] = 2 // 0 - hight, 1 - day_low, 2 - day_high
//counter_energy['3current'] = 1140.0  // Обнуление текущего значения счётчика
//counter_energy['3day_high'] = 24.90 // Обнуление дневного счетчика
//counter_energy['3day_low'] = 24.90 // Обнуление дневного счетчика
//counter_energy['3night'] = 31.03 // Обнуление дневного счетчика

//Обнуление MQTT топиков
//publish("/DayNightCounter/Current", "0")
//publish("/DayNightCounter/Day", "0")
//publish("/DayNightCounter/Night", "0")

//publish("/DayNightCounter/3Current", "0")
publish("/DayNightCounter/3Day_high", "0")
//publish("/DayNightCounter/3Day_low", "0")
//publish("/DayNightCounter/3Night", "0")



// 21 -> 23
defineRule("3day_21_23", {
  when: cron("00 00 23 * *"),
  then: function () {
    
    counter_energy['3daytime'] = 0
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['3day_low'] = counter_energy['3day_low'] + meter - counter_energy['3current']
    counter_energy['3current'] = meter
    
    publish("/DayNightCounter/3Current", counter_energy['3current'])
    publish("/DayNightCounter/3Day_low", counter_energy['3day_low'])
  }
});

// 23 -> 07
defineRule("3day_23_07", {
  when: cron("00 00 07 * *"),
  then: function () {
    
    counter_energy['3daytime'] = 2
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['3night'] = counter_energy['3night'] + meter - counter_energy['3current']
    counter_energy['3current'] = meter
    
    publish("/DayNightCounter/3Current", counter_energy['3current'])
    publish("/DayNightCounter/3Night", counter_energy['3night'])
  }
});

// 07 -> 10
defineRule("3day_07_10", {
  when: cron("00 00 10 * *"),
  then: function () {
    
    counter_energy['3daytime'] = 1
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['3day_high'] = counter_energy['3day_high'] + meter - counter_energy['3current']
    counter_energy['3current'] = meter
    
    publish("/DayNightCounter/3Current", counter_energy['3current'])
    publish("/DayNightCounter/3Day_high", counter_energy['3day_high'])
  }
});

// 10 -> 17
defineRule("3day_10_17", {
  when: cron("00 00 17 * *"),
  then: function () {
    
    counter_energy['3daytime'] = 2
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['3day_low'] = counter_energy['3day_low'] + meter - counter_energy['3current']
    counter_energy['3current'] = meter
    
    publish("/DayNightCounter/3Current", counter_energy['3current'])
    publish("/DayNightCounter/3Day_low", counter_energy['3day_low'])
  }
});

// 17 -> 21
defineRule("3day_17_21", {
  when: cron("00 00 21 * *"),
  then: function () {
    
    counter_energy['3daytime'] = 1
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['3day_high'] = counter_energy['3day_high'] + meter - counter_energy['3current']
    counter_energy['3current'] = meter
    
    publish("/DayNightCounter/3Current", counter_energy['3current'])
    publish("/DayNightCounter/3Day_high", counter_energy['3day_high'])
  }
});


//Каждый день в 23:00 (13:00 UTC) Обновлять показания дневного счётчиков
defineRule("day_energy_meter", {
  when: cron("00 00 23 * *"),
  then: function () {
    
    counter_energy['daytime'] = false
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['day'] = counter_energy['day'] + meter - counter_energy['current']
    counter_energy['current'] = meter
    
    publish("/DayNightCounter/Current", counter_energy['current'])
    publish("/DayNightCounter/Day", counter_energy['day'])
  }
});

//Каждый день в 07:00 (21:00 UTC) Обновлять показания ночного счётчика
defineRule("night_energy_meter", {
  when: cron("00 00 07 * *"),
  then: function () {
    
    counter_energy['daytime'] = true
    meter = dev["wb-map3e_34"]["Total AP energy"]
    
    counter_energy['night'] = counter_energy['night'] + meter - counter_energy['current']
    counter_energy['current'] = meter
    
    publish("/DayNightCounter/Current", counter_energy['current'])
    publish("/DayNightCounter/Night", counter_energy['night'])
  }
});




defineRule("3update_mqtt_energy_meter", {
  whenChanged: "wb-map3e_34/Total AP energy" ,
  then: function (newValue, devName, cellName) {
    publish("/DayNightCounter/Current", newValue)
    if (counter_energy['3daytime'] == 0) {
    	publish("/DayNightCounter/3Day_low", counter_energy['3day_low'])
		publish("/DayNightCounter/3Day_high", counter_energy['3day_high'])
      	publish("/DayNightCounter/3Night", counter_energy['3night'] + newValue - counter_energy['3current'])
    } 
    if (counter_energy['3daytime'] == 1) {
    	publish("/DayNightCounter/3Day_low", counter_energy['3day_low'] + newValue - counter_energy['3current'])
		publish("/DayNightCounter/3Day_high", counter_energy['3day_high'])
      	publish("/DayNightCounter/3Night", counter_energy['3night'])
    } 
    if (counter_energy['3daytime'] == 2) {
    	publish("/DayNightCounter/3Day_low", counter_energy['3day_low'])
		publish("/DayNightCounter/3Day_high", counter_energy['3day_high'] + newValue - counter_energy['3current'])
      	publish("/DayNightCounter/3Night", counter_energy['3night'])
    }
  }
});



defineRule("update_mqtt_energy_meter", {
  whenChanged: "wb-map3e_34/Total AP energy" ,
  then: function (newValue, devName, cellName) {
    publish("/DayNightCounter/Current", newValue)
    if (counter_energy['daytime']) {
    	publish("/DayNightCounter/Day", counter_energy['day'] + newValue - counter_energy['current'])
      	publish("/DayNightCounter/Night", counter_energy['night'])
    } else {
      	publish("/DayNightCounter/Day", counter_energy['day'])
    	publish("/DayNightCounter/Night", counter_energy['night'] + newValue - counter_energy['current'])
    }
  }
});

//log("Показание счётчика, Ночь", counter_energy['night']);
