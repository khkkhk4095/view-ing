package com.ssafy.interviewstudy.dto.calendar;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import com.ssafy.interviewstudy.domain.calendar.Calendar;
import com.ssafy.interviewstudy.domain.member.Member;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.bytebuddy.asm.Advice;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@NoArgsConstructor
@Data
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class CalendarDto {

    @NotNull
    private LocalDateTime startedAt;

    @NotNull
    private LocalDateTime endedAt;

    private String description;

    private Integer memberId;

    public static CalendarDto fromEntity(Calendar calendar){
        CalendarDto calendarDto = new CalendarDto();
        calendarDto.setMemberId(calendar.getAuthor().getId());
        calendarDto.setStartedAt(calendar.getStartedAt());
        calendarDto.setEndedAt(calendar.getEndedAt());
        calendarDto.setDescription(calendar.getDescription());
        return calendarDto;
    }

    public static Calendar toEntity(CalendarDto calendarDto, Member author){
        Calendar calendar =
                Calendar.builder()
                        .startedAt(calendarDto.getStartedAt())
                        .endedAt(calendarDto.getEndedAt())
                        .description(calendarDto.getDescription())
                        .author(author)
                        .build();
        return calendar;
    }
}
