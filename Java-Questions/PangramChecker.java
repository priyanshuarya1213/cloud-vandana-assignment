import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        boolean isPangram = checkIfPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();

        // Add all alphabets from A to Z to the set
        for (char ch = 'A'; ch <= 'Z'; ch++) {
            alphabetSet.add(ch);
        }

        input = input.toUpperCase(); // Convert the input to uppercase for case insensitivity

        // Check if all alphabets are present in the input
        for (char ch : input.toCharArray()) {
            if (Character.isLetter(ch)) {
                alphabetSet.remove(ch);
            }
        }

        return alphabetSet.isEmpty();
    }
}

