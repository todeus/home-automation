
var thermal_curve7 = [];
var outide_temp;
var setpoint;
var delta;
var set_temp;

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


set_temp = 0;
k = 0;
delta = 0;
setpoint = 0;
outside_temp = 0;

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

defineRule("set_temperature", {
    when: cron("00 * * * *"),
    then: function(newValue, devName, cellName) {
        outside_temp = dev["wb-w1/28-00000d6acdbe"];
    	if((outside_temp > -40) && (outside_temp < -30)) {
          setpoint = thermal_curve7[-40];
        } else if ((outside_temp > -30) && (outside_temp < -20)) {
          setpoint = thermal_curve7[-30];
        } else if ((outside_temp > -20) && (outside_temp < -10.5)) {
          setpoint = thermal_curve7[-20];
        } else if ((outside_temp > -10.5) && (outside_temp < -6.5)) {
          setpoint = thermal_curve7[-10.5];
        } else if ((outside_temp > -6.5) && (outside_temp < -5)) {
          setpoint = thermal_curve7[-6.5];
        } else if ((outside_temp > -5) && (outside_temp < -3)) {
          setpoint = thermal_curve7[-5];
        } else if ((outside_temp > -3) && (outside_temp < 0)) {
          setpoint = thermal_curve7[-3];
        } else if ((outside_temp > 0) && (outside_temp < 1)) {
          setpoint = thermal_curve7[0];
        } else if ((outside_temp > 1) && (outside_temp < 2.5)) {
          setpoint = thermal_curve7[1];
        } else if ((outside_temp > 2.5) && (outside_temp < 5)) {
          setpoint = thermal_curve7[2.5];
        } else if ((outside_temp > 5) && (outside_temp < 7)) {
          setpoint = thermal_curve7[5];
        } else if ((outside_temp > 7) && (outside_temp < 8.5)) {
          setpoint = thermal_curve7[7];
        } else if ((outside_temp > 8.5) && (outside_temp < 10)) {
          setpoint = thermal_curve7[8.5];
        } else if (outside_temp > 10) {
          setpoint = thermal_curve7[10];
        }
        
        k = dev["heat_floor"]["k"]/10;
        set_temp = dev["heat_floor"]["temperature"];
      
      	delta = set_temp - dev["wb-msw-v3_88"]["Temperature"];
        //log.info("Температура снаружи", outside_temp);
        //log.info("Уставка отопления", setpoint);
        //log.info("Дельта", delta);
        //log.info("Коэффициент", k);
        //log.info("Уставка отопления с коррекцией", setpoint + Math.round(delta*k));
      
        dev["wbe2-i-ebus_12"]["Heating Setpoint"] = setpoint + Math.round(delta*k);
    }
});