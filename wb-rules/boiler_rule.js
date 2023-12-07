//Изменить уставку бойлера на 70 градусов в 05:00(UTC 19:00)
defineRule("boiler_rule_05_00", {
  when: cron("00 00 05 * *"),
  then: function () {
    dev["wbe2-i-ebus_12"]["Hot Water Setpoint"] = 70
  }
});

//Изменить уставку бойлера на 40 градусов в 07:00(UTC 21:00)
defineRule("boiler_rule_07_00", {
  when: cron("00 00 07 * *"),
  then: function () {
    dev["wbe2-i-ebus_12"]["Hot Water Setpoint"] = 40
  }
});
