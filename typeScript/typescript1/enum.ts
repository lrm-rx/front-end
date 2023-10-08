// const Status = {
//   OFFLINE: 0,
//   ONLINE: 1,
//   DELETED: 2,
// };

enum Status {
  OFFLINE,
  ONLINE,
  DELETED,
}

function getResult(status: any) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}
console.log(Status.OFFLINE);
console.log(Status[0]);
const res = getResult(1);
console.log(res);
