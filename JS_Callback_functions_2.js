function logSysytemStatus(status, callback) {
  console.log(" The system status is: ${status} ");
  callback();
}

log.logSysytemStatus("Ready", function () {
  console.log("The status was tuped..");
});

function updateSystemStatus() {
  console.log("Status was updated...");
}

logSysytemStatus("Not ready", updateSystemStatus);
