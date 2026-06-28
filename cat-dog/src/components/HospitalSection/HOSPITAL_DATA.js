import Clinic from "../images/Clinic.jpg";
import Hospital from "../images/Hospital.jpg";
import PetHospital from "../images/PetHospital.jpg";

//여기는 이제 병원추천 정보들을 담는 곳이다
//00km, 별점,리뷰수, 병원이름, 간단한 병원정보, 버튼에 들어갈 정보, 그리고 사진....
//진짜 무슨정신으로 만들었을까??ㅋㅋㅋㅋ

export const HOSPITAL_DATA = [
  {
    id: 1,
    photo: Clinic,
    distance: "2.4km",
    review: "4.9(128)",
    name: "삼성동 메디컬 센터",
    information: "24시간 응급진료 고양이 전문",
    url: "https://m.blog.naver.com/himchanvet?tab=1",
  },

  {
    id: 2,
    photo: Hospital,
    distance: "1.1km",
    review: "4.7(92)",
    name: "포동포동 동물병원",
    information: "피부과 전문, 주말진료",
    url: "https://blog.naver.com/bodeum_ah",
  },

  {
    id: 3,
    photo: PetHospital,
    distance: "3.8km",
    review: "4.5(90)",
    name: "든든한 한방 동물 클리닉",
    information: "노령견 케어, 한방진료",
    url: "http://www.misoah.com/",
  },
];
