type RouteStrategyType = "Pedestrian" | "Vehicle";

type RouteReturn = `${RouteStrategyType} from ${number} to ${number}`;

interface RouteStrategy {
  buildRoute(a: number, b: number): RouteReturn;
}

export class PedestrianRouteStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): RouteReturn {
    return `Pedestrian from ${a} to ${b}`;
  }
}

export class VehicleRouteStrategy implements RouteStrategy {
  buildRoute(a: number, b: number): RouteReturn {
    return `Vehicle from ${a} to ${b}`;
  }
}

interface RouteNavigator {
  strategy: RouteStrategy;
  setStrategy(strategy: RouteStrategy): void;
  buildRoute(a: number, b: number): RouteReturn;
}

export class BasicNavigator implements RouteNavigator {
  strategy: RouteStrategy = new VehicleRouteStrategy();

  setStrategy(strategy: RouteStrategy): void {
    this.strategy = strategy;
  }

  buildRoute(a: number, b: number): RouteReturn {
    return this.strategy.buildRoute(a, b);
  }
}
