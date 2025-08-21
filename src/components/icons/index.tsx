import { BankCertificateIcon } from "./BankCertificateIcon";
import LearnAnytimeIcon from "./LearnAnytimeIcon";
import LiveSupportIcon from "./LiveSupportIcon";
import MortgageProfessionalIcon from "./MortgageProfessionalIcon";

export type Icons = {
  bankCertificate: () => React.JSX.Element;
  mortgageProfessional: () => React.JSX.Element;
  learnAnytime: () => React.JSX.Element;
  liveSupport: () => React.JSX.Element;
};

const icons: Icons = {
  bankCertificate: BankCertificateIcon,
  mortgageProfessional: MortgageProfessionalIcon,
  learnAnytime: LearnAnytimeIcon,
  liveSupport: LiveSupportIcon,
};

export default icons;
