import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SiswaService } from './siswa.service';
import { CreateSiswaDto } from './create-siswa.dto';
import { UpdateSiswaDto } from './update-siswa.dto';


@Controller('siswa')
export class SiswaController {
constructor(private readonly siswaService: SiswaService) {}


@Get()
findAll() {
return this.siswaService.findAll();
}


@Get(':nisn')
findOne(@Param('nisn') nisn: string) {
return this.siswaService.findOne(nisn);
}


@Post()
create(@Body() dto: CreateSiswaDto) {
this.siswaService.create(dto);
return { message: 'Siswa ditambahkan' };
}


@Put(':nisn')
update(@Param('nisn') nisn: string, @Body() dto: UpdateSiswaDto) {
this.siswaService.update(nisn, dto);
return { message: 'Data siswa diperbarui' };
}


@Delete(':nisn')
remove(@Param('nisn') nisn: string) {
this.siswaService.remove(nisn);
return { message: 'Siswa dihapus' };
}
}
