FROM openjdk:11

ADD server/build/libs/server-0.0.1-SNAPSHOT-boot.jar server-0.0.1-SNAPSHOT-boot.jar
EXPOSE 8085
ENTRYPOINT ["java", "-jar", "server-0.0.1-SNAPSHOT-boot.jar"]
#ENTRYPOINT ["/bin/bash", "-c", "sleep 9999999"]