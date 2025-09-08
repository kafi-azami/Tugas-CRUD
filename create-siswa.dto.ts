import { IsString, IsNumber } from 'class-validator';


export class CreateSiswaDto {
@IsString()
nisn: string;


@IsString()
nama: string;


@IsString()
alamat: string;


@IsNumber()
umur: number;
}