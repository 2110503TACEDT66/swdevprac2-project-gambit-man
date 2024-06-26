import dayjs, { Dayjs } from 'dayjs';
export interface ReservationItem {
    carId: string
    CarModel: string
    numOfDays: number
    pickupDate: string
    pickupLocation: string
    returnDate: string
    returnLocation: string
}
export interface CarItem {
    id: string
    model:string
    picture: string
}

export interface CarJson {
    count: number
    data: CarItem[]
}

export interface UserRegister {
    name:string
    userEmail:string
    tel:string
    userPassword:string
}

export interface BookingEdit {
    BookingDate:Dayjs
    user:string
    provider:string
    car:string
    createAt:Dayjs
}