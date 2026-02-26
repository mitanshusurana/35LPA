from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            # 1. Dashboard
            page.goto("http://localhost:4203/dashboard")
            page.wait_for_timeout(2000)

            # 2. Schedule
            page.goto("http://localhost:4203/schedule")
            page.wait_for_timeout(2000)

            # 3. Tasks Tab
            page.goto("http://localhost:4203/tasks")
            page.wait_for_timeout(2000)
            page.screenshot(path="/home/jules/verification/tasks_list.png", full_page=True)
            print("Screenshot: /home/jules/verification/tasks_list.png")

            # 4. Expand a different day (e.g., Day 8)
            page.click("text=DAY 8")
            page.wait_for_timeout(500)
            page.screenshot(path="/home/jules/verification/tasks_day8.png", full_page=True)
            print("Screenshot: /home/jules/verification/tasks_day8.png")

            # 5. Check a task on Day 8 (Front-running)
            # Find the first checkbox in Day 8
            # The structure is Day Header -> Content div. Content div is visible after click.
            # We look for a checkbox inside the newly visible area.
            checkbox = page.locator("text=DAY 8").locator("xpath=..").locator("xpath=..").locator("input[type='checkbox']").first
            checkbox.check()
            page.wait_for_timeout(1000)
            page.screenshot(path="/home/jules/verification/tasks_day8_checked.png", full_page=True)

            # 6. Verify Dashboard XP increase
            page.goto("http://localhost:4203/dashboard")
            page.wait_for_timeout(2000)
            page.screenshot(path="/home/jules/verification/dashboard_xp_check.png", full_page=True)

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
