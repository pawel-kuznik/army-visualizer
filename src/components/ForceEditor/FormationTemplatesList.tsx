import { PotentialSuspense } from "@pawel-kuznik/react-datasack";
import { Content } from "./FormationTemplatesList/Content";
import { useTemplateRepository } from "../TemplateRepositoryProvider";
import { Button } from "@pawel-kuznik/react-faceplate";
import { FormationTemplate } from "@pawel-kuznik/force-organizer";

export function FormationTemplatesList() {

    const repository = useTemplateRepository()
    const formationTemplatesPotential = repository.formations.getCollectionPotential();

    const onFormationCreation = () => {
        repository.formations.store(new FormationTemplate());
    };

    return (
        <PotentialSuspense>
            <Content potential={formationTemplatesPotential}/>
            <Button label="Create formation template" onClick={onFormationCreation}/>
        </PotentialSuspense>
    );
};