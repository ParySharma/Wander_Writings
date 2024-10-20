export const EMPTY_STRING = '';
export const EMPTY_ARRAY = [];
export const EMPTY_OBJECT = {};
export const UNDEFINED = undefined;
export const NULL = null;
export const LIMIT = 10;
export const DATA_NOT_FOUND = 'No Record Found';

export const validEmail =
  /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.?)+\.[a-zA-Z]{2,}$/;
export const validPassword =
  /^(?!.*[\s])(?=.*[a-z])(?=.*[A-Z])((?=.*[0-9])|(?=.*[!@#$%^&*]))(?=.{6,})/;
export const validPhoneNumber = /^[1-9]{1}[0-9]{9}/;
export const validNumber = /^[0-9]*[.]?[1-9]{0,2}$/;

export const ACCESS_TOKEN_KEY: any =
  process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY || EMPTY_STRING;

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const ORDER_TYPE = {
  ASC: 'asc',
  DESC: 'desc',
};
export const BUTTON_TYPE = {
  SUBMIT: 'submit',
  BUTTON: 'button',
  COLOR: 'link',
  PRIMARY: 'primary',
  DANGER: 'danger',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
};
export const BUTTON_VARIANT_TYPE = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};
export const DATE_FORMATE = {
  MM_DD_YYYY: 'MM-DD-YYYY',
  YYYY_MM_DD: 'YYYY-MM-DD',
  DD_MMMM_YYYY_h_mm: 'DD MMMM YYYY h:mm',
  MMMM_Do_YYYY: 'MMM Do YYYY',
};
export const TIME_FORMATE = {
  HH_MM_A: 'hh:mm A',
  HH_MM_SS: 'HH:mm:ss',
};
export const PAGINATION_TYPE = {
  PREVIOUS: 'PREVIOUS',
  NEXT: 'NEXT',
  SKIP: 'SKIP',
};

export const StepList = [
  { id: 'steps', value: 'steps' },
  { id: 'meters', value: 'meter' },
  { id: 'km', value: 'kilometer' },
  { id: 'mile', value: 'mile' },
  { id: 'yards', value: 'yards' },
];
export const HrFormate = [
  { id: 'am', value: 'AM' },
  { id: 'pm', value: 'PM' },
];

export const GENDER_LIST = ['Male', 'Female', 'Other'];

export const GENDER_TYPE: any = {
  m: 'Male',
  f: 'Female',
  o: 'Other',
};
export const TrackersMeasurement = [
  {
    value: 1,
    name: 'ExcelleImperial (lb/inch)nt',
  },
  {
    value: 2,
    name: 'Metric (kg/cm)',
  },
];

export const BodyFatData = [
  {
    Date: '12/12/2021',
    Percentage: '10%',
    Lbs: '60',
    LeanWeight: '40',
  },
  {
    Date: '12/12/2021',
    Percentage: '10%',
    Lbs: '60',
    LeanWeight: '40',
  },
  {
    Date: '12/12/2021',
    Percentage: '10%',
    Lbs: '60',
    LeanWeight: '40',
  },
  {
    Date: '12/12/2021',
    Percentage: '10%',
    Lbs: '60',
    LeanWeight: '40',
  },
  {
    Date: '12/12/2021',
    Percentage: '10%',
    Lbs: '60',
    LeanWeight: '40',
  },
];

export const POSSIBLE_LIST = ['Yes', 'No'];

export const POSSIBLE_TYPE = {
  YES: 'Yes',
  NO: 'No',
};

export const IMAGE_EXTENSIONS = [
  '.heif',
  '.heic',
  '.apng',
  '.avif',
  '.gif',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.png',
  '.svg',
  '.webp',
];

export const ROLE_ADD_TYPE = ['Role', 'Parent Role'];

export const HEIGHT_FOOT = [
  {
    id: '0',
    title: '0 foot',
  },
  {
    id: '1',
    title: '1 foot',
  },
  {
    id: '2',
    title: '2 foot',
  },
  {
    id: '3',
    title: '3 foot',
  },
  {
    id: '4',
    title: '4 foot',
  },
  {
    id: '5',
    title: '5 foot',
  },
  {
    id: '6',
    title: '6 foot',
  },
  {
    id: '7',
    title: '7 foot',
  },
  {
    id: '8',
    title: '8 foot',
  },
];

export const TEXT_TYPE = [
  {
    id: '1',
    title: 'Random',
  },
  {
    id: '2',
    title: 'Fasting',
  },
];

export const HEIGHT_INCH = [
  {
    id: '0.00',
    title: '0.00 inch',
  },
  {
    id: '0.25',
    title: '0.25 inch',
  },
  {
    id: '0.50',
    title: '0.50 inch',
  },
  {
    id: '0.75',
    title: '0.75 inch',
  },
  {
    id: '1.00',
    title: '1.00 inch',
  },
  {
    id: '1.25',
    title: '1.25 inch',
  },
  {
    id: '1.50',
    title: '1.50 inch',
  },
  {
    id: '1.75',
    title: '1.75 inch',
  },
  {
    id: '2.00',
    title: '2.00 inch',
  },
  {
    id: '2.25',
    title: '2.25 inch',
  },
  {
    id: '2.50',
    title: '2.50 inch',
  },
  {
    id: '2.75',
    title: '3.75 inch',
  },
  {
    id: '3.00',
    title: '2.00 inch',
  },
  {
    id: '3.25',
    title: '2.25 inch',
  },
  {
    id: '3.50',
    title: '2.50 inch',
  },
  {
    id: '3.75',
    title: '3.75 inch',
  },
  {
    id: '4.00',
    title: '4.00 inch',
  },
  {
    id: '4.25',
    title: '4.25 inch',
  },
  {
    id: '4.50',
    title: '4.50 inch',
  },
  {
    id: '4.75',
    title: '4.75 inch',
  },
  {
    id: '5.00',
    title: '5.00 inch',
  },
  {
    id: '5.25',
    title: '5.25 inch',
  },
  {
    id: '5.50',
    title: '5.50 inch',
  },
  {
    id: '5.75',
    title: '5.75 inch',
  },
  {
    id: '6.00',
    title: '6.00 inch',
  },
  {
    id: '6.25',
    title: '6.25 inch',
  },
  {
    id: '6.50',
    title: '6.50 inch',
  },
  {
    id: '6.75',
    title: '6.75 inch',
  },
  {
    id: '7.00',
    title: '7.00 inch',
  },
  {
    id: '7.25',
    title: '7.25 inch',
  },
  {
    id: '7.50',
    title: '7.50 inch',
  },
  {
    id: '7.75',
    title: '7.75 inch',
  },
  {
    id: '8.00',
    title: '8.00 inch',
  },
  {
    id: '8.25',
    title: '8.25 inch',
  },
  {
    id: '8.50',
    title: '8.50 inch',
  },
  {
    id: '8.75',
    title: '8.75 inch',
  },
  {
    id: '9.00',
    title: '9.00 inch',
  },
  {
    id: '9.25',
    title: '9.25 inch',
  },
  {
    id: '9.50',
    title: '9.50 inch',
  },
  {
    id: '9.75',
    title: '9.75 inch',
  },
  {
    id: '10.00',
    title: '10.00 inch',
  },
  {
    id: '10.25',
    title: '10.25 inch',
  },
  {
    id: '10.50',
    title: '10.50 inch',
  },
  {
    id: '10.75',
    title: '10.75 inch',
  },
];

export const ORGANIZATION_REGISTRATION_TYPE = [
  {
    label: 'Registration Option',
    icon: undefined,
  },
  {
    label: 'Spouse',
    icon: undefined,
  },
  {
    label: 'SSO',
    icon: undefined,
  },
  {
    label: 'Points Leaderboard',
    icon: undefined,
  },
  {
    label: 'Information Popup',
    icon: undefined,
  },
];

export const Time_Hr = Array.from({ length: 12 }, (v, k) => ({
  id: (k + 1).toString(),
  title: (k + 1).toString().padStart(2, '0'),
}));

export const Time_Min = Array.from({ length: 61 }, (v, k) => ({
  id: k.toString(),
  title: k.toString().padStart(2, '0'),
}));

export const Time_Period = [
  { id: 'AM', title: 'AM' },
  { id: 'PM', title: 'PM' },
];
export const TrackersBgrf = [
  { value: 'Random', name: 'Random' },
  { value: 'Fasting', name: 'Fasting' },
];
export const MONTH_TYPE = [
  { id: 'January', title: 'January' },
  { id: 'February', title: 'February' },
  { id: 'March', title: 'March' },
  { id: 'April', title: 'April' },
  { id: 'May', title: 'May' },
  { id: 'June', title: 'June' },
  { id: 'July', title: 'July' },
  { id: 'August', title: 'August' },
  { id: 'September', title: 'September' },
  { id: 'October', title: 'October' },
  { id: 'November', title: 'November' },
  { id: 'December', title: 'December' },
];

export const MONTH_SLOT_TYPE = [
  { id: 'First', title: 'First' },
  { id: 'Second', title: 'Second' },
  { id: 'Third', title: 'Third' },
  { id: 'Fourth', title: 'Fourth' },
  { id: 'Fifth', title: 'Fifth' },
  { id: 'Last', title: 'Last' },
];

export const DATE_TYPE = Array.from({ length: 31 }, (v, k) => ({
  id: k + 1,
  title: (k + 1).toString(),
}));

export const DAYS_TYPE = [
  { id: 'Monday', title: 'Monday' },
  { id: 'Tuesday', title: 'Tuesday' },
  { id: 'Wednesday', title: 'Wednesday' },
  { id: 'Thursday', title: 'Thursday' },
  { id: 'Friday', title: 'Friday' },
  { id: 'Saturday', title: 'Saturday' },
  { id: 'Sunday', title: 'Sunday' },
];

export const PROFILE_DROP_DOWN = {
  EDIT_PROFILE: 'EDIT PROFILE',
  LOGOUT: 'LOGOUT',
};

export const lab_API_tabs_example = ['Submit Form', 'Submitted Forms'];
export const Racipe_Challenges_Tabs = ['Forms', 'Details'];
export const lab_Media_Fitness_example = ['You Might Like', 'Saved Videos'];
export const Nutrition_tabs_example = ['Food Log', 'Water Log'];
export const lab_Incentive_Summary = ['My Summary', 'Spouse Summary'];
export const lab_Tracker_Exercise_Tab = [
  'Walking',
  'Running',
  'Swimming',
  'Cycling',
];
export const lab_Tracker_Biometrics_Tab = [
  'Weight Log',
  'Blood Pressure Log',
  'Cholesterol',
  'Blood Glucose Log',
];
export const lab_Tracker_Exercise_Record_Tab = ['Worst Day', 'Best Day'];
export const Random_Act_History_tabs = ['Sent Tokens', 'Received Tokends'];
export const lab_Tracker_Measurements_Tab = [
  'Jackson/Pollock 7',
  'Jackson/Pollock 3',
];
export const CurrentHeightFt = [
  { value: '0', label: '0 ft' },
  { value: '1', label: '1 ft' },
  { value: '2', label: '2 ft' },
  { value: '3', label: '3 ft' },
  { value: '4', label: '4 ft' },
  { value: '5', label: '5 ft' },
  { value: '6', label: '6 ft' },
  { value: '7', label: '7 ft' },
  { value: '8', label: '8 ft' },
];
export const CurrentHeightIn = [
  { value: '0.15', label: '0.15 in' },
  { value: '0.25', label: '0.25 in' },
  { value: '0.50', label: '0.50 in' },
  { value: '0.75', label: '0.75 in' },
  { value: '1.00', label: '1.00 in' },
  { value: '1.25', label: '1.25 in' },
  { value: '1.50', label: '1.50 in' },
  { value: '1.75', label: '1.75 in' },
  { value: '2.00', label: '2.00 in' },
  { value: '2.25', label: '2.25 in' },
  { value: '2.50', label: '2.50 in' },
  { value: '2.75', label: '2.75 in' },
  { value: '3.00', label: '3.00 in' },
  { value: '3.25', label: '3.25 in' },
  { value: '3.50', label: '3.50 in' },
  { value: '3.75', label: '3.75 in' },
  { value: '4.00', label: '4.00 in' },
  { value: '4.25', label: '4.25 in' },
  { value: '4.50', label: '4.50 in' },
  { value: '4.75', label: '4.75 in' },
  { value: '5.00', label: '5.00 in' },
  { value: '5.25', label: '5.25 in' },
  { value: '5.50', label: '5.50 in' },
  { value: '5.75', label: '5.75 in' },
  { value: '6.00', label: '6.00 in' },
  { value: '6.25', label: '6.25 in' },
  { value: '6.50', label: '6.50 in' },
  { value: '6.75', label: '6.75 in' },
  { value: '7.00', label: '7.00 in' },
  { value: '7.25', label: '7.25 in' },
  { value: '7.50', label: '7.50 in' },
  { value: '7.75', label: '7.75 in' },
  { value: '8.00', label: '8.00 in' },
  { value: '8.25', label: '8.25 in' },
  { value: '8.50', label: '8.50 in' },
  { value: '8.75', label: '8.75 in' },
  { value: '9.00', label: '9.00 in' },
  { value: '9.25', label: '9.25 in' },
  { value: '9.50', label: '9.50 in' },
  { value: '9.75', label: '9.75 in' },
  { value: '10.00', label: '10.00 in' },
  { value: '10.25', label: '10.25 in' },
  { value: '10.50', label: '10.50 in' },
  { value: '10.75', label: '10.75 in' },
  { value: '11.00', label: '11.00 in' },
  { value: '11.25', label: '11.25 in' },
  { value: '11.50', label: '11.50 in' },
  { value: '11.75', label: '11.75 in' },
];

export const lab_Period_Tab = [
  {
    label: 'Current Period',
    value: 'current_period',
  },
  {
    label: 'Past Period',
    value: 'past_period',
  },
];

export const Tab_Date = [
  'May 5, 2024',
  'May 6, 2024',
  'May 7, 2024',
  'May 8, 2024',
  'May 9, 2024',
];

export const Healthy_Habit_Challenge = [
  'Protien',
  'Carbohydrates',
  'Fat',
  'Minerals',
  'Vitamins',
  'Water',
];
export const timeZoneList: any[] = [
  {
    id: 1,
    timezone_name: 'UTC',
    timezone_desc: 'UTC',
    timezone_value: 'UTC',
    status: 1,
  },
  {
    id: 2,
    timezone_name: 'Pacific/Kwajalein',
    timezone_desc: '(GMT -12:00) Eniwetok, Kwajalein',
    timezone_value: 'Eniwetok, Kwajalein',
    status: 1,
  },
  {
    id: 3,
    timezone_name: 'Pacific/Samoa',
    timezone_desc: '(GMT -11:00) Midway Island, Samoa',
    timezone_value: 'Midway Island, Samoa',
    status: 1,
  },
  {
    id: 4,
    timezone_name: 'Pacific/Honolulu',
    timezone_desc: '(GMT -10:00) Hawaii',
    timezone_value: 'Hawaii',
    status: 1,
  },
  {
    id: 5,
    timezone_name: 'America/Anchorage',
    timezone_desc: '(GMT -9:00) Alaska',
    timezone_value: 'Alaska',
    status: 1,
  },
  {
    id: 6,
    timezone_name: 'America/Los_Angeles',
    timezone_desc: '(GMT -8:00) Pacific Time (US & Canada)',
    timezone_value: 'Pacific Time',
    status: 1,
  },
  {
    id: 7,
    timezone_name: 'America/Denver',
    timezone_desc: '(GMT -7:00) Mountain Time (US & Canada)',
    timezone_value: 'Mountain Time',
    status: 1,
  },
  {
    id: 8,
    timezone_name: 'America/Chicago',
    timezone_desc: '(GMT -6:00) Central Time (US & Canada), Mexico City',
    timezone_value: 'Central Time',
    status: 1,
  },
  {
    id: 9,
    timezone_name: 'America/New_York',
    timezone_desc: '(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima',
    timezone_value: 'Eastern Time',
    status: 1,
  },
  {
    id: 10,
    timezone_name: 'Atlantic/Bermuda',
    timezone_desc: '(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz',
    timezone_value: 'Atlantic Time',
    status: 1,
  },
  {
    id: 11,
    timezone_name: 'Canada/Newfoundland',
    timezone_desc: '(GMT -3:30) Newfoundland',
    timezone_value: 'Newfoundland',
    status: 1,
  },
  {
    id: 12,
    timezone_name: 'Brazil/East',
    timezone_desc: '(GMT -3:00) Brazil, Buenos Aires, Georgetown',
    timezone_value: 'Brazil, Buenos Aires, Georgetown',
    status: 1,
  },
  {
    id: 13,
    timezone_name: 'Atlantic/Azores',
    timezone_desc: '(GMT -2:00) Mid-Atlantic',
    timezone_value: 'Mid-Atlantic',
    status: 1,
  },
  {
    id: 14,
    timezone_name: 'Atlantic/Cape_Verde',
    timezone_desc: '(GMT -1:00 hour) Azores, Cape Verde Islands',
    timezone_value: 'Azores, Cape Verde Islands',
    status: 1,
  },
  {
    id: 15,
    timezone_name: 'Europe/London',
    timezone_desc: '(GMT) Western Europe Time, London, Lisbon, Casablanca',
    timezone_value: 'Western Europe Time, London, Lisbon, Casablanca',
    status: 1,
  },
  {
    id: 16,
    timezone_name: 'Europe/Brussels',
    timezone_desc: '(GMT +1:00 hour) Brussels, Copenhagen, Madrid, Paris',
    timezone_value: 'Brussels, Copenhagen, Madrid, Paris',
    status: 1,
  },
  {
    id: 17,
    timezone_name: 'Europe/Helsinki',
    timezone_desc: '(GMT +2:00) Kaliningrad, South Africa',
    timezone_value: 'Kaliningrad, South Africa',
    status: 1,
  },
  {
    id: 18,
    timezone_name: 'Asia/Baghdad',
    timezone_desc: '(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg',
    timezone_value: 'Baghdad, Riyadh, Moscow, St. Petersburg',
    status: 1,
  },
  {
    id: 19,
    timezone_name: 'Asia/Tehran',
    timezone_desc: '(GMT +3:30) Tehran',
    timezone_value: 'Tehran',
    status: 1,
  },
  {
    id: 20,
    timezone_name: 'Asia/Baku',
    timezone_desc: '(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi',
    timezone_value: 'Abu Dhabi, Muscat, Baku, Tbilisi',
    status: 1,
  },
  {
    id: 21,
    timezone_name: 'Asia/Kabul',
    timezone_desc: '(GMT +4:30) Kabul',
    timezone_value: 'Kabul',
    status: 1,
  },
  {
    id: 22,
    timezone_name: 'Asia/Karachi',
    timezone_desc: '(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent',
    timezone_value: 'Ekaterinburg, Islamabad, Karachi, Tashkent',
    status: 1,
  },
  {
    id: 23,
    timezone_name: 'Asia/Calcutta',
    timezone_desc: '(GMT +5:30) Bombay, Calcutta, Madras, New Delhi',
    timezone_value: 'Bombay, Calcutta, Madras, New Delhi',
    status: 1,
  },
  {
    id: 24,
    timezone_name: 'Asia/Dhaka',
    timezone_desc: '(GMT +6:00) Almaty, Dhaka, Colombo',
    timezone_value: 'Almaty, Dhaka, Colombo',
    status: 1,
  },
  {
    id: 25,
    timezone_name: 'Asia/Bangkok',
    timezone_desc: '(GMT +7:00) Bangkok, Hanoi, Jakarta',
    timezone_value: 'Bangkok, Hanoi, Jakarta',
    status: 1,
  },
  {
    id: 26,
    timezone_name: 'Asia/Hong_Kong',
    timezone_desc: '(GMT +8:00) Beijing, Perth, Singapore, Hong Kong',
    timezone_value: 'Beijing, Perth, Singapore, Hong Kong',
    status: 1,
  },
  {
    id: 28,
    timezone_name: 'Asia/Tokyo',
    timezone_desc: '(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
    timezone_value: 'Tokyo, Seoul, Osaka, Sapporo, Yakutsk',
    status: 1,
  },
  {
    id: 29,
    timezone_name: 'Australia/Adelaide',
    timezone_desc: '(GMT +9:30) Adelaide, Darwin',
    timezone_value: 'Adelaide, Darwin',
    status: 1,
  },
  {
    id: 30,
    timezone_name: 'Pacific/Guam',
    timezone_desc: '(GMT +10:00) Eastern Australia, Guam, Vladivostok',
    timezone_value: 'Eastern Australia, Guam, Vladivostok',
    status: 1,
  },
  {
    id: 31,
    timezone_name: 'Asia/Magadan',
    timezone_desc: '(GMT +11:00) Magadan, Solomon Islands, New Caledonia',
    timezone_value: 'Magadan, Solomon Islands, New Caledonia',
    status: 1,
  },
  {
    id: 32,
    timezone_name: 'Pacific/Fiji',
    timezone_desc: '(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka',
    timezone_value: 'Auckland, Wellington, Fiji, Kamchatka',
    status: 1,
  },
];
export const NutritionMealTime = [
  { id: '1', title: 'Morning Snack' },
  { id: '2', title: 'Breakfast' },
  { id: '3', title: 'Lunch' },
  { id: '4', title: 'Afternoon Snack' },
  { id: '5', title: 'Dinner' },
  { id: '7', title: 'Anytime' },
];

export const USER_ROLES = {
  ADMIN: 1,
  REGISTERED: 2,
  ORGADMIN: 11,
  PUBLIC: 3,
  BROKER: 7,
  PHYSICIAN: 8,
  WCH: 12,
  MGR: 13,
  OPPSADMIN: 15,
  SPOUSE: 16,
  OTHER: 17,
  SUPPORT_LEVEL_1: 18,
  GLOBALCOACH: 19,
  COACH: 20,
  BROKERADMIN: 22,
  REGIONALADMIN: 23,
  DATAMANAGER: 25,
  CENSUSGLOBALADMIN: 35,
  CENSUSADMIN: 36,
  GLOBALDATAMANAGER: 37,
  GLOBALENGAGEMENTMANAGER: 38,
  ENGAGEMENTMANAGER: 39,
  ENGAGEMENTDATAMANAGER: 40,
  NEWSLETTERDESIGNER: 41,
};

export const THEME_SETTINGS_TABS = [
  {
    label: 'Theme Setting',
    icon: undefined,
  },
  {
    label: 'Advance Theme Setting',
    icon: undefined,
  },
  {
    label: 'HRA & Biometric Theme Setting',
    icon: undefined,
  },
];

export const FOUR_SMALL_RECTANGLES_TABS = [
  {
    label: 'Icon 1',
  },
  {
    label: 'Icon 2',
  },
  {
    label: 'Icon 3',
  },
  {
    label: 'Icon 4',
  },
];

export const ADD_USER_TABS = [
  {
    label: 'Add New User',
    icon: undefined,
  },
  {
    label: 'Import Users',
    icon: undefined,
  },
  {
    label: 'Import Users History',
    icon: undefined,
  },
];
