import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Tutorial {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'varchar'})
    video_url: string;

    @Column({type: 'varchar'})
    description: string;

    @Column()
    published: boolean;

    @Column({ type: 'date' })
    deleted_at: Date;

}
