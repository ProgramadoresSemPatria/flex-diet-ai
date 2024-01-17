import { BIOTIPO_DESCRIPTIONS } from '@/utils/BiotiposDescriptios';
import { BiotipoBox } from '../Atoms/BiotipoBox';
import { BiotipoSelectorProps } from '@/interfaces/BiotipoSelectorProps';

export const BiotipoSelector: React.FC<BiotipoSelectorProps> = ({ onChange, selectedBiotipo }) => {

  return (
    <div className="flex flex-col space-y-4 pr-20 pl-20">
      <BiotipoBox 
        title="Ectomorfo"
        description={BIOTIPO_DESCRIPTIONS.Ectomorfo}
        imageSrc="/assets/ectomorfo.jpg"
        isSelected={selectedBiotipo === "Ectomorfo"}
        onSelect={() => onChange("Ectomorfo")}
       />
       <BiotipoBox
        title="Mesomorfo"
        description={BIOTIPO_DESCRIPTIONS.Mesomorfo}
        imageSrc="/assets/mesomorfo.jpg"
        isSelected={selectedBiotipo === "Mesomorfo"}
        onSelect={() => onChange("Mesomorfo")}
       />
       <BiotipoBox
        title="Endomorfo"
        description={BIOTIPO_DESCRIPTIONS.Endomorfo}
        imageSrc="/assets/endomorfo.jpg"
        isSelected={selectedBiotipo === "Endomorfo"}
        onSelect={() => onChange("Endomorfo")}
       />
    </div>
    );
};
