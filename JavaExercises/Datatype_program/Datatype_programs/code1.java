import java.util.*;

class Student {
    private int id;
    private String name;
    private double marks;

    public Student(int id, String name, double marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }

    public int getId() { return id; }
    public String getName() { return name; }
    public double getMarks() { return marks; }

    public String toString() {
        return id + " | " + name + " | " + marks;
    }
}

public class code1 {
    public static void main(String[] args) {
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student(1, "Aarav", 92.5));
        students.add(new Student(2, "Meena", 88.0));
        students.add(new Student(3, "Rahul", 79.2));

        System.out.println("All Students:");
        for (Student s : students) System.out.println(s);

        Scanner sc = new Scanner(System.in);
        System.out.print("\nEnter ID to search: ");
        int id = sc.nextInt();
        for (Student s : students)
            if (s.getId() == id) System.out.println("Found: " + s);
        sc.close();
    }
}

