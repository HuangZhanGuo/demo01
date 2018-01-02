package edu.jyu.stumgm.action;

import org.apache.log4j.Logger;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import edu.jyu.stumgm.Common;
import edu.jyu.stumgm.bo.StudentBO;
import edu.jyu.stumgm.entity.Student;
public class StudentLoginAction extends ActionSupport {
	private static final long serialVersionUID = -8515183406496049654L;
	private Logger logger = Logger.getLogger(StudentLoginAction.class);
	
	private String stuNumber= "";
	private boolean loginError = false;
	private StudentBO studentBO;
	public void setStudentBO(StudentBO studentBO) {
		this.studentBO = studentBO;
	}


	public String getStuNumber() {
		return stuNumber;
	}


	public void setStuNumber(String stuNumber) {
		this.stuNumber = stuNumber;
	}


	public boolean isLoginError(){
		return loginError;
	}

	public String execute(){
		logger.info("login");
		if(ActionContext.getContext().getSession().get("user") != null){
			return SUCCESS;
		}
		logger.info(stuNumber);
		if ("".equals(stuNumber)) {
			return SUCCESS;
		}
		Student user = studentBO.getStudentByNumber(stuNumber);

		logger.info("login: "+user);
		if(user != null){
			ActionContext.getContext().getSession().put("user", user);
			ActionContext.getContext().getSession().put("isstudent", true);
			return SUCCESS;
		}

		loginError = true;
		return SUCCESS;
	}

}