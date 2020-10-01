import {
    World,
    renderSystem,
    Entity,
    Component,
    Displayable,
    Position,
  } from "ecs";

  export default renderSystem([Displayable], (entities: Entity[], lag: number, world: World) => {
    entities.forEach(entity => {
        const { ref } = entity.get(Displayable);

        ifHas(entity, Position, position => {
            ref.y = position.y;
        });
    })
  });


  function ifHas<C extends Component>(
    entity: Entity,
    component: new (...args: any) => C,
    fn: (component: C) => void
  ) {
    if (entity.has(component)) {
      fn(entity.get(component));
    }
  }