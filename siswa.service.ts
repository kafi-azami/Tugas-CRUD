import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateSiswaDto } from './create-siswa.dto';
import { UpdateSiswaDto } from './update-siswa.dto';


export interface Siswa {
nisn: string;
nama: string;
alamat: string;
umur: number;
}


@Injectable()
export class SiswaService {
private siswa: Siswa[] = [];


findAll(): Siswa[] {
return this.siswa;
}


findOne(nisn: string): Siswa {
const data = this.siswa.find((s) => s.nisn === nisn);
if (!data) throw new NotFoundException('Siswa tidak ditemukan');
return data;
}


create(dto: CreateSiswaDto): void {
if (this.siswa.find((s) => s.nisn === dto.nisn)) {
throw new ConflictException('NISN sudah ada');
}
this.siswa.push(dto);
}


update(nisn: string, dto: UpdateSiswaDto): void {
const index = this.siswa.findIndex((s) => s.nisn === nisn);
if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
this.siswa[index] = { ...this.siswa[index], ...dto };
}


remove(nisn: string): void {
const index = this.siswa.findIndex((s) => s.nisn === nisn);
if (index === -1) throw new NotFoundException('Siswa tidak ditemukan');
this.siswa.splice(index, 1);
}
}