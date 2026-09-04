package com.alan.springbootdemo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private String productType;

    @Column(nullable = false)
    private Long standardPrice;

    public Products(){

    }

    public Products(Long productId,String productName,String productType,Long standardPrice){
        this.productId = productId;
        this.productName = productName;
        this.productType = productType;
        this.standardPrice = standardPrice;
    }

    public Long getProductId(){
        return  productId;
    }

    public String getProductName(){
        return productName;
    }

    public void  setProductName(String productName){
        this.productName = productName;
    }

    public String getProductType(){
        return productType;
    }

    public void setProductType(String productType){
        this.productType = productType;
    }

    public Long getStandardPrice(){
        return standardPrice;
    }

    public void setStandardPrice(Long standardPrice){
     this.standardPrice = standardPrice;
    }
}
