package com.IBMiX2.server.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Seniority {

    @Id
    @GeneratedValue
    private Integer userId;

    private Double finalScore;

    private int experience;

    private String positionName;

    private int airportScore;

    private int rewardPunishmentScore;

    private double scheduleQualityScore;

    public Seniority(Integer userId, Double finalScore, int experience, String positionName, int airportScore,
                     int rewardPunishmentScore, double scheduleQualityScore){
        this.userId = userId;
        this.finalScore = finalScore;
        this.experience = experience;
        this.positionName = positionName;
        this.airportScore = airportScore;
        this.rewardPunishmentScore = rewardPunishmentScore;
        this.scheduleQualityScore = scheduleQualityScore;
    }

    public Seniority(){}

    public Integer getUserId() {
        return userId;
    }

    public Double getFinalScore() {
        return finalScore;
    }

    public void setFinalScore(Double finalScore) {
        this.finalScore = finalScore;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public int getAirportScore() {
        return airportScore;
    }

    public void setAirportScore(int airportScore) {
        this.airportScore = airportScore;
    }

    public int getRewardPunishmentScore() {
        return rewardPunishmentScore;
    }

    public void setRewardPunishmentScore(int rewardPunishmentScore) {
        this.rewardPunishmentScore = rewardPunishmentScore;
    }

    public double getScheduleQualityScore() {
        return scheduleQualityScore;
    }

    public void setScheduleQualityScore(double scheduleQualityScore) {
        this.scheduleQualityScore = scheduleQualityScore;
    }
}
