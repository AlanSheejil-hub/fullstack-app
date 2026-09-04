package com.alan.springbootdemo.controller;


import com.alan.springbootdemo.service.GreetService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HiController {

    public final GreetService greetService;

    public HiController(GreetService greetService){
        this.greetService = greetService;
    }


    @GetMapping("/home")
    public  String hi() {
        return greetService.getGreet();
    }
}
