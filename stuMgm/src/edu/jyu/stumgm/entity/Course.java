package edu.jyu.stumgm.entity;
// Generated 2017-12-21 20:45:50 by Hibernate Tools 4.0.1.Final

import java.util.HashSet;
import java.util.Set;

/**
 * Course generated by hbm2java
 */
public class Course implements java.io.Serializable {

	private String courseId;
	private String courseName;
	private Set teacCous = new HashSet(0);

	public Course() {
	}

	public Course(String courseId, String courseName) {
		this.courseId = courseId;
		this.courseName = courseName;
	}

	public Course(String courseId, String courseName, Set teacCous, Set stuCous) {
		this.courseId = courseId;
		this.courseName = courseName;
		this.teacCous = teacCous;
	}

	public String getCourseId() {
		return this.courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public Set getTeacCous() {
		return this.teacCous;
	}

	public void setTeacCous(Set teacCous) {
		this.teacCous = teacCous;
	}

}
