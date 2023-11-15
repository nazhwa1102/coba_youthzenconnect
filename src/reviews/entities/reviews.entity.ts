import { User } from '#/users/entities/user.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    VersionColumn,
    CreateDateColumn,
    ManyToOne,
  } from 'typeorm';
  
  @Entity()
  export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @ManyToOne(()=> User,(user)=> user.review)
    user : User

    @Column({
        type :"text"
    })
    text: string;
  
    @CreateDateColumn({
      type: 'timestamp with time zone',
      nullable: false,
    })
    createdAt: Date;
  
    @UpdateDateColumn({
      type: 'timestamp with time zone',
      nullable: false,
    })
    updatedAt: Date;
  
    @DeleteDateColumn({
      type: 'timestamp with time zone',
      nullable: true,
    })
    deletedAt: Date;

    @VersionColumn()
    version: number;
  
  }
  