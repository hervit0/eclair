package kyu6;

import java.util.stream.IntStream;

public class MexicanWave {

    public static String[] wave(String subject) {
        return IntStream
                .range(0, subject.length())
                .mapToObj(i -> waveIt(new StringBuilder(subject), i))
                .filter(s -> !s.equals(subject))
                .toArray(String[]::new);
    }

    private static String waveIt(StringBuilder subject, int position) {
//        String wavedChar = subject.substring(position, position + 1).toUpperCase();
        String wavedChar = String.valueOf(subject.charAt(position)).toUpperCase();
        return subject.replace(position, position + 1, wavedChar).toString();
    }

}
