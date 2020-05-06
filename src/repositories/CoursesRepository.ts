import { EntityRepository, Repository } from 'typeorm';
import Courses from '../models/Course';

@EntityRepository(Courses)
export default class CoursesRepository extends Repository<Courses> {

}
