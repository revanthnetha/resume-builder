import { useEffect, useState } from 'react';
import { useExperiences } from 'src/stores/experience';
import EditSectionContainer from 'src/helpers/common/components/EditSectionContainer';
import AddExperience from './components/AddExperience';
import Experience from './components/Experience';

const ExperienceLayout = () => {
  const allExperience = useExperiences((state) => state.experiences);

  const [expanded, setExpanded] = useState<string | false>('Languages');

  useEffect(() => {
    setExpanded(allExperience[0]?.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (panel: string, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col gap-8 mb-8">
      {allExperience.map((state) => (
        <EditSectionContainer
          key={state.companyName}
          title={state.companyName || 'Experience'}
          expanded={expanded === state.id}
          clickHandler={() => handleChange(state.id, expanded !== state.id)}
        >
          <Experience experienceInfo={state} />
        </EditSectionContainer>
      ))}
      <AddExperience handleChange={handleChange} />
    </div>
  );
};

export default ExperienceLayout;
