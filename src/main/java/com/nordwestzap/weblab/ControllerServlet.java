package com.nordwestzap.weblab;

import com.nordwestzap.weblab.dao.AttemptRepository;
import jakarta.ejb.EJB;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

public class ControllerServlet extends HttpServlet {

    @EJB
    private AttemptRepository attemptRepository;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("get req");
        request.setAttribute("Attempt-Repository", attemptRepository);
        request.getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/check").forward(request, response);
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        System.out.println("del req");
//        Cookie sessionIdCookie = null;
//        for (Cookie cookie : req.getCookies()) {
//            if (cookie.getName().equals("JSESSIONID")) {
//                sessionIdCookie = cookie;
//                break;
//            }
//        }
//        attemptRepository.deleteUserAttempts(sessionIdCookie.getValue());
        resp.setStatus(400);
        resp.getWriter().print("sessionIdCookie");
        return;
    }
}
