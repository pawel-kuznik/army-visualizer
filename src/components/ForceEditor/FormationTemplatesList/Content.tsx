import { FormationTemplate } from "@pawel-kuznik/force-organizer";
import { CollectionPotential } from "@pawel-kuznik/datasack";
import { usePotentialCollection } from "@pawel-kuznik/react-datasack";

export interface ContentProps {
    potential: CollectionPotential<FormationTemplate>;
}

export function Content({ potential }: ContentProps) {
    
    const collection = usePotentialCollection(potential);
    
    return (
        <div>
            {collection.map(formationTemplate => (
                <span>{formationTemplate.name} {formationTemplate.id}</span>
            ))}
        </div>
    );
};