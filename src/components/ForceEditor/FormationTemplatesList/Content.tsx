import { FormationTemplate } from "@pawel-kuznik/force-organizer";
import { CollectionPotential } from "@pawel-kuznik/datasack";
import { usePotentialCollection } from "@pawel-kuznik/react-datasack";
import { useTemplateRepository } from "../../TemplateRepositoryProvider";
import { Item } from "./Item";

export interface ContentProps {
    potential: CollectionPotential<FormationTemplate>;
}

export function Content({ potential }: ContentProps) {
    
    const templateRepository = useTemplateRepository();
    const collection = usePotentialCollection(potential);
    
    return (
        <div>
            {collection.map(formationTemplate => (
                <Item potential={templateRepository.formations.getEntryPotential(formationTemplate.id)}/>
            ))}
        </div>
    );
};