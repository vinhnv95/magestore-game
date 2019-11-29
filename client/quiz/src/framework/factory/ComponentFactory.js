import AbstractFactory from "./AbstractFactory";

export class ComponentFactory extends AbstractFactory{

    /**
     * get target component to use
     *
     * @param object
     * @return {*}
     */
    get(object) {
        return this.getObject(`Component`, object);
    }
}

let componentFactory = new ComponentFactory();

export default componentFactory;
