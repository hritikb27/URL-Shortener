/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Urls')
export class UrlsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    userID: number;

    @Column({ type: 'varchar', length: 200, nullable: false })
    url: string;
    
    @Column({ type: 'varchar', length: 100, nullable: false })
    shorturl: string;

    @Column({ type: 'int', nullable: true, default: 0 })
    views: number;
}