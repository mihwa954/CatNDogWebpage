import Patella from "../images/Patella.png";
import GreenStar from "../images/GreenStar.png";
import Heart from "../images/Heart.png";
import Clock from "../images/Clock.png";
import Foot from "../images/Foot.png";
import Dental from "../images/Dental.png";

export const FINDHOSPITAL_DATA = [
  {
    id: 1,
    button: `24 / EMERGENCY`,
    buttonBackgroundColor: "#e7b5a8",
    buttonColor: "#aa371c",
    name: "청담 우리동물병원",
    address: "서울특별시 강남구 삼성로 614",
    info1: "슬개골 수술 전문",
    info2: "명의 5인",
    dist: "800m",
    icon1: Patella,
    icon2: GreenStar,
    icon1BackgroundColor: "#CEE5FF4D",
    icon1Color: "#00649B",
    icon2BackgroundColor: "#B4FDB44D",
    icon2Color: "#286C34",
    category: "24시 응급",
  },

  {
    id: 2,
    button: `SPECIALIST`,
    buttonBackgroundColor: "rgba(206, 229, 255, 0.30)",
    buttonColor: "#563600",
    name: "해마루 동물진료소",
    address: "경기도 성남시 분당구 판교역로 2",
    info1: "심장 질환 센터",
    info2: "예약제 운영",
    dist: "1.2km",
    icon1: Heart,
    icon2: Clock,
    icon1BackgroundColor: "#CEE5FF4D",
    icon1Color: "#00649B",
    icon2BackgroundColor: "#E2E3D9",
    icon2Color: "#5D6058",
    category: "심장질환",
  },

  {
    id: 3,
    button: `FELINE FRIENDLY`,
    buttonBackgroundColor: "rgba(180, 253, 180, 0.20)",
    buttonColor: "#1F632C",
    name: "야옹아프지마 고양이병원",
    address: "서울특별시 서초구 신반포로 12",
    info1: "최우수 병원선정",
    dist: "2.5km",
    icon1: Foot,
    icon1BackgroundColor: "#CEE5FF4D",
    icon1Color: "#00649B",
    category: "슬개골 수술",
  },


   {
    id: 4,
    button: `DNTAL CARE`,
    buttonBackgroundColor: "rgba(255, 177, 61, 0.20);",
    buttonColor: "#563600",
    name: "튼튼 치과 동물병원",
    address: "서울특별시 강남구 역삼로 415",
    info1: "치과 정밀 수술",
    dist: "2.5km",
    icon1: Dental,
    icon1BackgroundColor: "#CEE5FF4D",
    icon1Color: "#00649B",
    category: "24시 응급",
  },
];
