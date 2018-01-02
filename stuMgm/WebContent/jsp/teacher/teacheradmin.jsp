<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="t" tagdir="/WEB-INF/tags"%>
<html>
	<head>
		<t:head />
		<script language="javascript" src="html/js/manageTeacher.js"></script>
		<link rel="stylesheet" href="html/css/editStudent.css" type="text/css"></link>
	</head>
	<body>
		<t:menu />
		<div class="main-top">
			<span class="title">老师信息管理</span>
		</div>
		<div class="main-body">
			<form name="teacherForm" method="POST">
				<table  class="main-table" cellpadding="0" cellspacing="0" align="center">
					<tr class="title">
						<td></td>
						<td>教工号</td>
						<td>姓名</td>
						<td>性别</td>
						<td>电话</td>
						<td>电子邮件</td>
					</tr>
					<c:forEach items="${teacherlist}" var="teach">
						<tr>							
							<td>
								<input type=checkbox id="${teach.id}"
									value="${teach.id}">
							</td>
							<td>
								<c:out value="${teach.id}"></c:out>
							</td>
							<td>
								<c:out value="${teach.name}" />
							</td>
							<td>
								<c:if test="${teach.gender eq '1'}">男</c:if>
								<c:if test="${teach.gender eq '0'}">女</c:if>
							</td>
							<td>
								<c:out value="${teach.phone}" />
							</td>
							<td>
								<c:out value="${teach.email}" />
							</td>
						</tr>
					</c:forEach>

					<c:if test="${empty teacherlist}">
						<tr>
							<td colspan=9>
								没有任何老师信息，请先添加!
							</td>
						</tr>
					</c:if>
					<tr>
						<td colspan=9 class="ctrl-button">
							<input type=button name="allcheck" value="全选"
								onclick="checkall(teacherForm);" />
							<input type=button name="allnotcheck" value="全不选"
								onclick="uncheckall(teacherForm);" />
							<input type=button name="delete" value="删除"
								onclick="deleteteacher(teacherForm);" />
							<input type=button name="edit" value="修改老师信息"
								onclick="editteacher(teacherForm);" />
							<input type=button name="addcourse" value="维护老师课程"
								onclick="modifycourse(teacherForm);" />
						</td>
					</tr>
				</table>
				<input type=hidden name="teacherids" value="">
			</form>
			</div>
			<t:foot />
		</body>
</html>