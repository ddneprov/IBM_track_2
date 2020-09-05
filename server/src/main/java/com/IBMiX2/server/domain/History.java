package com.IBMiX2.server.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
public class History {

    @Id
    @GeneratedValue
    private Integer historyId;

    private Date date;

    private Double scoreWas;

    private Double scoreWere;

    private int userId;

    public History(Integer historyId, Date date, Double scoreWas, Double scoreWere) {
        this.historyId = historyId;
        this.date = date;
        this.scoreWas = scoreWas;
        this.scoreWere = scoreWere;
    }

    public History() {
    }


    public Integer getHistoryId() {
        return historyId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Double getScoreWas() {
        return scoreWas;
    }

    public void setScoreWas(Double scoreWas) {
        this.scoreWas = scoreWas;
    }

    public Double getScoreWere() {
        return scoreWere;
    }

    public void setScoreWere(Double scoreWere) {
        this.scoreWere = scoreWere;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
