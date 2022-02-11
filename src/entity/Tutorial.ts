import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tutorial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar', nullable: true})
    video_url: string;

    @Column({type: 'varchar'})
    description: string;

    @Column()
    published: boolean;

    @Column({ type: 'date', nullable: true })
    deleted_at: Date;

}
