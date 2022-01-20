function efficientRobot(state, route) {
  let {place, parcels} = state;
  if (route.length == 0) {
    let parcel = getClosestParcel(parcels, place);
    route = [...parcel.route];
  }
  return {direction: route[0], memory: route.slice(1)};
}

function getClosestParcel(parcels, robotLocation) {
  function sortByDistance(parcel1, parcel2) { 
    if (parcel1.route.length < parcel2.route.length) return -1;
    if (parcel1.route.length > parcel2.route.length) return 1;
    if (parcel1.route.length === parcel2.route.length) {
      if (parcel1.place == robotLocation) return 1;
      if (parcel2.place == robotLocation) return -1;
    }
    return 0;
  }
	
  return parcels.map(parcel => ({...parcel, route: findRoute(roadGraph, robotLocation, parcel.place != robotLocation ? parcel.place : parcel.address)})).sort(sortByDistance)[0]
}

compareRobots(efficientRobot, [], goalOrientedRobot, []);

runRobotAnimation(VillageState.random(), efficientRobot, []);

// Author Solution:

// function lazyRobot({place, parcels}, route) {
//   if (route.length == 0) {
//     // Describe a route for every parcel
//     let routes = parcels.map(parcel => {
//       if (parcel.place != place) {
//         return {route: findRoute(roadGraph, place, parcel.place),
//                 pickUp: true};
//       } else {
//         return {route: findRoute(roadGraph, place, parcel.address),
//                 pickUp: false};
//       }
//     });

//     // This determines the precedence a route gets when choosing.
//     // Route length counts negatively, routes that pick up a package
//     // get a small bonus.
//     function score({route, pickUp}) {
//       return (pickUp ? 0.5 : 0) - route.length;
//     }
//     route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
//   }

//   return {direction: route[0], memory: route.slice(1)};
// }
