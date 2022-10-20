import axiosInstance from "./index";

export interface MakeChatRoomRequest {
  opponentId: string
}

export function fetchChatRoomList() {
  return axiosInstance.get('/room')
}

export function createChatRoomDetail(roomId: string) {
  return axiosInstance.get(`/room/${roomId}`)
}

export function makeChatRoom(body: MakeChatRoomRequest) {
  return axiosInstance.post("/room", body)
}