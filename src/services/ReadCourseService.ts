import { getCustomRepository } from 'typeorm';
import CoursesRepository from '../repositories/CoursesRepository';
import Course from '../models/Course';

export default class ReadCourseService {
	public async execute( { id } ): Promise<Course> {
		const coursesRepository = getCustomRepository(CoursesRepository);

		const verifyIfIdExists = await coursesRepository.findOne(id);

		if (!verifyIfIdExists){
			throw new Error('This id does not exists');
		};

		const course = verifyIfIdExists;

		return course;
	};
	public async returnValues(): Promise<Course[]>{
		const coursesRepository = getCustomRepository(CoursesRepository);
		const coursesList = coursesRepository.find();

		return coursesList;

	};
};
