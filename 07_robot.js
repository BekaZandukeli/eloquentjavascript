function newRunRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) return turn;
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
  const taskCount = 100;
  const tasks = [];
  let sumOfTurnsOfRobot1 = 0;
  let sumOfTurnsOfRobot2 = 0;
  for (let i = 0; i < taskCount; i++) {
    tasks.push(VillageState.random());
  }
  for (let task of tasks) {
    sumOfTurnsOfRobot1 += runRobot(task, robot1, memory1);
    sumOfTurnsOfRobot2 += runRobot(task, robot2, memory2);
  }
  console.log(
    `robot1: ${sumOfTurnsOfRobot1 / taskCount}`,
    `\nrobot2: ${sumOfTurnsOfRobot2 / taskCount}`
  );
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
