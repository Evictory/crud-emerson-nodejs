import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
	CreateDateColumn,
} from 'typeorm';

@Entity('courses')
class Course {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	courseName: string;

	@Column()
	university: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}

export default Course;
