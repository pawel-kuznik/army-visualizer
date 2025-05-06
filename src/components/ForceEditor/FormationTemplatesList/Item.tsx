import { EntryPotential } from "@pawel-kuznik/datasack";
import { FormationTemplate } from "@pawel-kuznik/force-organizer";
import { FormationTemplateEditor } from "../../FormationTemplateEditor";
import { PotentialSuspense } from "@pawel-kuznik/react-datasack";

export interface ItemProps {
    potential: EntryPotential<FormationTemplate>;   
}

export function Item({ potential }: ItemProps) {
    return (
        <PotentialSuspense>
            <FormationTemplateEditor templatePotential={potential}/>
        </PotentialSuspense>
    );   
};