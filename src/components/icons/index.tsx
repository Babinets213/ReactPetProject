import { EducationSectionIcons } from "@/types/education-section-icons";
import { BankCertificateIcon } from "./BankCertificateIcon";
import EducationIcon from "./EducationIcon";
import LineEightItemsIcon from "./horizontal-lines/LineEightItemsIcon";
import LineSixItemsIcon from "./horizontal-lines/LineSixItemsIcon";
import LineTenItemsIcon from "./horizontal-lines/LineTenItemsIcon";
import LearnAnytimeIcon from "./LearnAnytimeIcon";
import LiveSupportIcon from "./LiveSupportIcon";
import MortgageProfessionalIcon from "./MortgageProfessionalIcon";

export type Icons = {
  bankCertificate: () => React.JSX.Element;
  mortgageProfessional: () => React.JSX.Element;
  learnAnytime: () => React.JSX.Element;
  liveSupport: () => React.JSX.Element;
};

export const icons: Icons = {
  bankCertificate: BankCertificateIcon,
  mortgageProfessional: MortgageProfessionalIcon,
  learnAnytime: LearnAnytimeIcon,
  liveSupport: LiveSupportIcon,
};

export type LineIcons = {
  lineSixItems: (type: EducationSectionIcons) => React.JSX.Element;
  lineEightItems: (type: EducationSectionIcons) => React.JSX.Element;
  lineTenItems: (type: EducationSectionIcons) => React.JSX.Element;
};

export const lineIcons: LineIcons = {
  lineSixItems: LineSixItemsIcon,
  lineEightItems: LineEightItemsIcon,
  lineTenItems: LineTenItemsIcon,
};

export type EducationIcon = {
  education: (type: EducationSectionIcons) => React.JSX.Element;
};

export const educationIcon: EducationIcon = {
  education: EducationIcon,
};
