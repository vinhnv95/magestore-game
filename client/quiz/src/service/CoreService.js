import ResourceModelFactory from "../framework/factory/ResourceModelFactory";
import ObjectManager from "../framework/ObjectManager";

export default class CoreService {

    /**
     * get target Resource Model
     *
     * @return {class}
     */
    getResourceModel(resourceModel) {
        if(!resourceModel) {
            if (!this.compiledResourceModel) {
                this.compiledResourceModel = ResourceModelFactory.get(this.resourceModel);
            }
            return ObjectManager.get(this.compiledResourceModel);
        }
        return ObjectManager.get(ResourceModelFactory.get(resourceModel));
    }
}
