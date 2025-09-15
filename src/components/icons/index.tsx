import { EducationSectionIcons } from "@/types/education-section-icons";
import { BankCertificateIcon } from "./BankCertificateIcon";
import EducationIcon from "./EducationIcon";
import LineEightItemsIcon from "./horizontal-lines/LineEightItemsIcon";
import LineSixItemsIcon from "./horizontal-lines/LineSixItemsIcon";
import LineTenItemsIcon from "./horizontal-lines/LineTenItemsIcon";
import LearnAnytimeIcon from "./LearnAnytimeIcon";
import LiveSupportIcon from "./LiveSupportIcon";
import MortgageProfessionalIcon from "./MortgageProfessionalIcon";
import CalendarIcon from "./profile/CalendarIcon";
import DeleteIcon from "./profile/DeleteIcon";
import DocumentIcon from "./profile/DocumentIcon";
import DownloadIcon from "./profile/DownloadIcon";
import GeoIcon from "./profile/GeoIcon";
import MailIcon from "./profile/MailIcon";
import MenuIcon from "./profile/MenuIcon";
import NotificationIcon from "./profile/NotificationIcon";
import PhoneIcon from "./profile/PhoneIcon";
import SuitCaseIcon from "./profile/SuitCaseIcon";
import UploadIcon from "./profile/UploadIcon";
import UserIcon from "./profile/UserIcon";

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

type DocumentIconProps = {
  color?: string;
};

type NotificationIconProps = {
  color?: string;
};
export type ProfileIcons = {
  calendar: () => React.JSX.Element;
  delete: () => React.JSX.Element;
  document: (props?: DocumentIconProps) => React.JSX.Element;
  download: () => React.JSX.Element;
  geo: () => React.JSX.Element;
  mail: () => React.JSX.Element;
  menu: () => React.JSX.Element;
  notification: (props?: NotificationIconProps) => React.JSX.Element;
  phone: () => React.JSX.Element;
  suitCase: () => React.JSX.Element;
  upload: () => React.JSX.Element;
  user: () => React.JSX.Element;
};

export const profileIcons: ProfileIcons = {
  calendar: CalendarIcon,
  delete: DeleteIcon,
  document: (props) => <DocumentIcon {...props} />,
  download: DownloadIcon,
  geo: GeoIcon,
  mail: MailIcon,
  menu: MenuIcon,
  notification: (props) => <NotificationIcon {...props} />,
  phone: PhoneIcon,
  suitCase: SuitCaseIcon,
  upload: UploadIcon,
  user: UserIcon,
};
